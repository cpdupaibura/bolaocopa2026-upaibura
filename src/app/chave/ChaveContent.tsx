'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { KNOCKOUT_PARTICIPANTS } from '@/data/participants';
import { KNOCKOUT_BETS } from '@/data/knockout_bets';
import { KNOCKOUT_RESULTS } from '@/data/knockout_results';
import { KNOCKOUT_GAMES_BY_ID } from '@/data/knockout_games';
import { TEAMS } from '@/data/teams';
import { KnockoutGame } from '@/lib/types';
import AvatarImg from '@/components/AvatarImg';

// ── Resolve who fills a position in the bracket ───────────────────────────────
// Given the ID of a "source" game (the game whose winner fills a slot),
// returns the team the participant expects (or actually) in that slot.
function resolveTeam(
  sourceId: string | undefined,
  bets: Record<string, 'a' | 'b'>,
  results: Record<string, 'a' | 'b'>
): { name: string; flag: string } {
  if (!sourceId) return { name: '?', flag: '' };
  const game = KNOCKOUT_GAMES_BY_ID[sourceId];
  if (!game) return { name: '?', flag: '' };

  // Use actual result first, fall back to participant's pick
  const winner = results[sourceId] ?? bets[sourceId];
  if (!winner) return { name: '?', flag: '' };

  if (game.round === 'r16') {
    const id = winner === 'a' ? game.homeTeamId : game.awayTeamId;
    const team = id ? TEAMS[id] : null;
    return { name: team?.name ?? '?', flag: team?.flag ?? '' };
  }

  // For OF+: winner's identity comes from their source game
  const nextSourceId = winner === 'a' ? game.homeSource : game.awaySource;
  return resolveTeam(nextSourceId, bets, results);
}

// ── Team slot (one side of a bracket game card) ───────────────────────────────
type SlotStatus = 'picked' | 'not-picked' | 'neutral';

function TeamSlot({
  flag,
  name,
  status,
  result,
  pick,
  side,
  showIndicator,
}: {
  flag: string;
  name: string;
  status: SlotStatus;
  result: 'a' | 'b' | undefined;
  pick: 'a' | 'b' | undefined;
  side: 'a' | 'b';
  showIndicator: boolean;
}) {
  const picked = pick === side;
  const correct = picked && result === side;
  const wrong = picked && result !== undefined && result !== side;
  const actualWon = result === side;

  const bg = correct
    ? 'bg-emerald-950 border-l-2 border-emerald-500'
    : wrong
    ? 'bg-red-950/40 border-l-2 border-red-700'
    : picked
    ? 'bg-amber-950/60 border-l-2 border-amber-500'
    : actualWon
    ? 'bg-slate-800/60'
    : '';

  const textColor = correct
    ? 'text-emerald-300'
    : wrong
    ? 'text-slate-500'
    : picked
    ? 'text-amber-100'
    : actualWon
    ? 'text-slate-300'
    : 'text-slate-400';

  return (
    <div className={`flex items-center gap-1.5 px-2 py-1.5 ${bg}`}>
      <span className="text-sm leading-none w-5 text-center shrink-0">{flag || '🏳'}</span>
      <span className={`flex-1 text-[11px] font-medium truncate leading-tight ${textColor} ${wrong ? 'line-through opacity-60' : ''}`}>
        {name}
      </span>
      {showIndicator && (
        <>
          {correct && <span className="text-emerald-400 text-[10px] shrink-0 font-bold">✓</span>}
          {wrong && <span className="text-red-500 text-[10px] shrink-0 font-bold">✗</span>}
          {picked && !result && (
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          )}
        </>
      )}
    </div>
  );
}

// ── Bracket game card ─────────────────────────────────────────────────────────
function BracketCard({
  game,
  bets,
  results,
  label,
}: {
  game: KnockoutGame;
  bets: Record<string, 'a' | 'b'>;
  results: Record<string, 'a' | 'b'>;
  label?: string;
}) {
  const pick = bets[game.id] as 'a' | 'b' | undefined;
  const result = results[game.id] as 'a' | 'b' | undefined;
  const showIndicator = !!pick;

  let homeTeam: { name: string; flag: string };
  let awayTeam: { name: string; flag: string };

  if (game.round === 'r16') {
    const hId = game.homeTeamId;
    const aId = game.awayTeamId;
    homeTeam = { name: TEAMS[hId!]?.name ?? game.homeLabel, flag: TEAMS[hId!]?.flag ?? '' };
    awayTeam = { name: TEAMS[aId!]?.name ?? game.awayLabel, flag: TEAMS[aId!]?.flag ?? '' };
  } else {
    homeTeam = resolveTeam(game.homeSource, bets, results);
    awayTeam = resolveTeam(game.awaySource, bets, results);
  }

  return (
    <div className="w-[112px] flex-shrink-0 border border-slate-700/80 rounded-lg overflow-hidden bg-slate-900 shadow-lg">
      {label && (
        <div className="px-2 py-0.5 bg-slate-800/80 text-[9px] text-slate-500 font-bold tracking-widest uppercase truncate">
          {label}
        </div>
      )}
      <TeamSlot flag={homeTeam.flag} name={homeTeam.name} status={pick === 'a' ? 'picked' : 'not-picked'} result={result} pick={pick} side="a" showIndicator={showIndicator} />
      <div className="h-px bg-slate-700/60" />
      <TeamSlot flag={awayTeam.flag} name={awayTeam.name} status={pick === 'b' ? 'picked' : 'not-picked'} result={result} pick={pick} side="b" showIndicator={showIndicator} />
    </div>
  );
}

// ── Recursive bracket node ────────────────────────────────────────────────────
function BracketNode({
  game,
  bets,
  results,
  depth = 0,
}: {
  game: KnockoutGame;
  bets: Record<string, 'a' | 'b'>;
  results: Record<string, 'a' | 'b'>;
  depth?: number;
}) {
  const roundLabel: Record<string, string> = {
    r16: `J${game.id.replace('R16-', '')}`,
    of: `Oit.${game.id.replace('OF-', '')}`,
    qf: `Qrt.${game.id.replace('QF-', '')}`,
    sf: `Semi ${game.id.replace('SF-', '')}`,
    final: 'Final',
  };

  if (game.round === 'r16') {
    return <BracketCard game={game} bets={bets} results={results} label={roundLabel[game.round]} />;
  }

  const homeSrc = game.homeSource ? KNOCKOUT_GAMES_BY_ID[game.homeSource] : null;
  const awaySrc = game.awaySource ? KNOCKOUT_GAMES_BY_ID[game.awaySource] : null;

  return (
    <div className="flex items-stretch">
      {/* Children */}
      <div className="flex flex-col">
        {homeSrc && (
          <div className="flex-1 flex items-center">
            <BracketNode game={homeSrc} bets={bets} results={results} depth={depth + 1} />
          </div>
        )}
        {awaySrc && (
          <div className="flex-1 flex items-center">
            <BracketNode game={awaySrc} bets={bets} results={results} depth={depth + 1} />
          </div>
        )}
      </div>

      {/* Connector */}
      <div className="w-3 self-stretch flex flex-col">
        <div className="flex-1 border-r border-t border-slate-700/60 rounded-tr" />
        <div className="flex-1 border-r border-b border-slate-700/60 rounded-br" />
      </div>

      {/* This game */}
      <div className="flex items-center">
        <BracketCard game={game} bets={bets} results={results} label={roundLabel[game.round]} />
      </div>
    </div>
  );
}

// ── Participant selector ──────────────────────────────────────────────────────
function ParticipantPill({
  participant,
  selected,
  hasBets,
  onClick,
}: {
  participant: (typeof KNOCKOUT_PARTICIPANTS)[0];
  selected: boolean;
  hasBets: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-sm font-medium flex-shrink-0 ${
        selected
          ? 'bg-emerald-700 border-emerald-500 text-white'
          : hasBets
          ? 'bg-slate-800 border-slate-600 text-slate-300 active:bg-slate-700'
          : 'bg-slate-900 border-slate-800 text-slate-500'
      }`}
    >
      <AvatarImg
        id={participant.id}
        name={participant.name}
        avatarFile={participant.avatarFile}
        size={22}
        ring={selected}
      />
      <span className="truncate max-w-[96px]">{participant.name.split(' ')[0]}</span>
      {!hasBets && <span className="text-[10px] text-slate-600">–</span>}
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ChaveContent() {
  const searchParams = useSearchParams();
  const [selectedId, setSelectedId] = useState<string | null>(
    searchParams.get('p')
  );

  const betsMap = useMemo(() => {
    if (!selectedId) return {} as Record<string, 'a' | 'b'>;
    return Object.fromEntries(
      KNOCKOUT_BETS.filter((b) => b.participantId === selectedId).map((b) => [b.gameId, b.pick])
    ) as Record<string, 'a' | 'b'>;
  }, [selectedId]);

  const participantsWithBets = useMemo(() => {
    const ids = new Set(KNOCKOUT_BETS.map((b) => b.participantId));
    return ids;
  }, []);

  function toggleParticipant(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  const semi1 = KNOCKOUT_GAMES_BY_ID['SF-1'];
  const semi2 = KNOCKOUT_GAMES_BY_ID['SF-2'];
  const final = KNOCKOUT_GAMES_BY_ID['FINAL'];

  const selectedName = selectedId
    ? KNOCKOUT_PARTICIPANTS.find((p) => p.id === selectedId)?.name.split(' ')[0]
    : null;

  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Header */}
      <header className="bg-linear-to-b from-green-950 via-green-900/60 to-slate-950 px-4 pt-10 pb-6 text-center">
        <h1 className="text-xl font-extrabold text-white tracking-widest uppercase">
          Chave do Mata-mata
        </h1>
        <p className="text-slate-500 text-xs mt-1">
          {selectedName
            ? `Mostrando apostas de ${selectedName}`
            : 'Selecione um apostador para ver o chaveamento dele'}
        </p>
      </header>

      <div className="max-w-lg mx-auto px-4">
        {/* Participant pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 pt-2 no-scrollbar">
          {KNOCKOUT_PARTICIPANTS.map((p) => (
            <ParticipantPill
              key={p.id}
              participant={p}
              selected={selectedId === p.id}
              hasBets={participantsWithBets.has(p.id)}
              onClick={() => toggleParticipant(p.id)}
            />
          ))}
        </div>

        {/* Legend */}
        {selectedId && (
          <div className="flex items-center gap-4 text-[10px] text-slate-500 mb-4 mt-1">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Apostado (aguardando)
            </span>
            <span className="flex items-center gap-1 text-emerald-400">✓ Acerto</span>
            <span className="flex items-center gap-1 text-red-400">✗ Erro</span>
          </div>
        )}

        {/* ── LADO ESQUERDO ── */}
        <section className="mb-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest font-semibold mb-2">
            Lado esquerdo · Jogos 1–8 → Semifinal 1 · 14/07
          </p>
          <div className="overflow-x-auto pb-2">
            <BracketNode game={semi1} bets={betsMap} results={KNOCKOUT_RESULTS} />
          </div>
        </section>

        {/* ── LADO DIREITO ── */}
        <section className="mb-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest font-semibold mb-2">
            Lado direito · Jogos 9–16 → Semifinal 2 · 15/07
          </p>
          <div className="overflow-x-auto pb-2">
            <BracketNode game={semi2} bets={betsMap} results={KNOCKOUT_RESULTS} />
          </div>
        </section>

        {/* ── FINAL ── */}
        <section className="mb-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest font-semibold mb-2">
            Final · 19 de julho · 16h
          </p>
          <div className="flex items-stretch gap-0">
            <div className="flex flex-col w-[112px] shrink-0">
              <BracketCard
                game={KNOCKOUT_GAMES_BY_ID['SF-1']}
                bets={betsMap}
                results={KNOCKOUT_RESULTS}
                label="Semi 1"
              />
              <div className="h-1" />
              <BracketCard
                game={KNOCKOUT_GAMES_BY_ID['SF-2']}
                bets={betsMap}
                results={KNOCKOUT_RESULTS}
                label="Semi 2"
              />
            </div>
            <div className="w-3 self-stretch flex flex-col">
              <div className="flex-1 border-r border-t border-slate-700/60 rounded-tr" />
              <div className="flex-1 border-r border-b border-slate-700/60 rounded-br" />
            </div>
            <div className="flex items-center">
              <BracketCard
                game={final}
                bets={betsMap}
                results={KNOCKOUT_RESULTS}
                label="🏆 Final"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
