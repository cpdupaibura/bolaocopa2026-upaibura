import Link from 'next/link';
import { KNOCKOUT_PARTICIPANTS } from '@/data/participants';
import { KNOCKOUT_BETS } from '@/data/knockout_bets';
import { KNOCKOUT_RESULTS } from '@/data/knockout_results';
import { KNOCKOUT_GAMES, KNOCKOUT_GAMES_BY_ID } from '@/data/knockout_games';
import { KnockoutGame, KnockoutScore } from '@/lib/types';
import { calculateKnockoutLeaderboard, resolveLabel, teamDisplay } from '@/lib/knockout_scoring';
import AvatarImg from '@/components/AvatarImg';

const MEDALS = ['🥇'];

// ─── Leaderboard ─────────────────────────────────────────────────────────────

function ScoreCard({
  rank,
  entries,
  maxPoints,
}: {
  rank: number;
  entries: KnockoutScore[];
  maxPoints: number;
}) {
  const pct = maxPoints > 0 ? Math.round((entries[0].points / maxPoints) * 100) : 0;
  const medal = rank === 1 ? MEDALS[0] : null;
  const isTop = rank === 1;

  return (
    <div
      className={`rounded-xl p-4 mb-2 border ${
        isTop
          ? 'bg-amber-950/40 border-amber-700/50'
          : 'bg-slate-900 border-slate-800'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 font-bold text-sm w-5 text-right shrink-0">{rank}</span>
          {medal && <span className="text-xl leading-none">{medal}</span>}
        </div>
        <span
          className={`font-extrabold text-lg tabular-nums shrink-0 ${
            isTop ? 'text-amber-400' : 'text-slate-200'
          }`}
        >
          {entries[0].points}
          <span className="text-xs font-normal text-slate-500 ml-1">pts</span>
        </span>
      </div>

      <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-3">
        <div
          className={`h-full rounded-full transition-all ${isTop ? 'bg-amber-400' : 'bg-emerald-600'}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div>
        {entries.map((entry, idx) => (
          <div key={entry.participant.id}>
            {idx > 0 && <div className="h-px bg-slate-800 my-3" />}
            <div className="flex items-center gap-3">
              <AvatarImg
                id={entry.participant.id}
                name={entry.participant.name}
                avatarFile={entry.participant.avatarFile}
                size={44}
                ring={isTop}
              />
              <Link href={`/chave?p=${entry.participant.id}`} className="flex-1 min-w-0 group">
                <span className="block truncate font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                  {entry.participant.name}
                </span>
                <span className="text-xs text-slate-500">
                  {entry.correct} acerto{entry.correct !== 1 ? 's' : ''} de {entry.total} aposta{entry.total !== 1 ? 's' : ''}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Bracket ─────────────────────────────────────────────────────────────────

function r16Num(id: string): number {
  return parseInt(id.replace('R16-', ''), 10);
}

function BracketGameCard({
  game,
  label,
  compact = false,
}: {
  game: KnockoutGame;
  label?: string;
  compact?: boolean;
}) {
  const result = KNOCKOUT_RESULTS[game.id];
  const homeWon = result === 'a';
  const awayWon = result === 'b';

  let homeDisplay: string;
  let awayDisplay: string;

  if (game.round === 'r16') {
    homeDisplay = teamDisplay(game.homeTeamId);
    awayDisplay = teamDisplay(game.awayTeamId);
  } else {
    homeDisplay = result
      ? resolveLabel(game.id, 'a', KNOCKOUT_RESULTS)
      : game.homeLabel;
    awayDisplay = result
      ? resolveLabel(game.id, 'b', KNOCKOUT_RESULTS)
      : game.awayLabel;
  }

  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-lg overflow-hidden ${compact ? 'text-[11px]' : 'text-xs'}`}>
      {label && (
        <div className="px-2 py-0.5 bg-slate-800/60 text-slate-500 text-[10px] font-semibold tracking-wider flex justify-between">
          <span>{label}</span>
          <span className="text-slate-600">{game.time}</span>
        </div>
      )}
      <div className={`px-2 ${compact ? 'py-1' : 'py-1.5'}`}>
        <div className={`flex items-center gap-1 ${homeWon ? 'text-emerald-400 font-bold' : awayWon ? 'text-slate-500' : 'text-slate-300'}`}>
          <span className="flex-1 truncate">{homeDisplay}</span>
          {homeWon && <span className="shrink-0 text-[10px]">✓</span>}
        </div>
        <div className="h-px bg-slate-800 my-0.5" />
        <div className={`flex items-center gap-1 ${awayWon ? 'text-emerald-400 font-bold' : homeWon ? 'text-slate-500' : 'text-slate-300'}`}>
          <span className="flex-1 truncate">{awayDisplay}</span>
          {awayWon && <span className="shrink-0 text-[10px]">✓</span>}
        </div>
      </div>
    </div>
  );
}

/** Renderiza um bloco de dois jogos R16 que alimentam um OF */
function BracketPair({
  r16a,
  r16b,
  of,
  ofLabel,
}: {
  r16a: KnockoutGame;
  r16b: KnockoutGame;
  of: KnockoutGame;
  ofLabel: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_6px_1fr] gap-x-0 items-stretch mb-3">
      {/* R16 pair */}
      <div className="flex flex-col gap-1.5">
        <BracketGameCard game={r16a} label={`Jogo ${r16Num(r16a.id)}`} compact />
        <BracketGameCard game={r16b} label={`Jogo ${r16Num(r16b.id)}`} compact />
      </div>

      {/* Connector lines */}
      <div className="flex flex-col items-center">
        <div className="flex-1 border-r border-t border-slate-700 rounded-tr" />
        <div className="flex-1 border-r border-b border-slate-700 rounded-br" />
      </div>

      {/* OF card */}
      <div className="flex items-center">
        <BracketGameCard game={of} label={ofLabel} />
      </div>
    </div>
  );
}

export default function Home() {
  const leaderboard = calculateKnockoutLeaderboard(
    KNOCKOUT_PARTICIPANTS,
    KNOCKOUT_BETS,
    KNOCKOUT_RESULTS
  );
  const maxPoints = leaderboard[0]?.points ?? 0;

  const tiers: KnockoutScore[][] = [];
  for (const entry of leaderboard) {
    const last = tiers[tiers.length - 1];
    if (!last || last[0].points !== entry.points) {
      tiers.push([entry]);
    } else {
      last.push(entry);
    }
  }

  // OF → QF → SF → FINAL mapping
  const of = (id: string) => KNOCKOUT_GAMES_BY_ID[id];
  const r16 = (id: string) => KNOCKOUT_GAMES_BY_ID[id];

  // Left bracket: OF1-4 → QF1-2 → SF1
  // Right bracket: OF5-8 → QF3-4 → SF2

  const totalGames = KNOCKOUT_GAMES.length;
  const playedGames = KNOCKOUT_GAMES.filter((g) => KNOCKOUT_RESULTS[g.id]).length;

  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Header */}
      <header className="bg-linear-to-b from-green-950 via-green-900/80 to-slate-950 px-4 pt-12 pb-8 text-center">
        <div className="text-5xl mb-3">⚽</div>
        <h1 className="text-2xl font-extrabold text-white tracking-widest uppercase">
          Bolão Copa 2026
        </h1>
        <p className="mt-1 text-base tracking-widest">🇧🇷&nbsp;&nbsp;🇺🇸&nbsp;&nbsp;🇨🇦&nbsp;&nbsp;🇲🇽</p>
        <p className="text-amber-400 text-xs font-bold mt-2 tracking-widest uppercase">Mata-mata · {playedGames}/{totalGames} jogos</p>
        <p className="mt-2">
          <Link
            href="/fase-grupos"
            className="text-slate-500 text-xs hover:text-slate-300 transition-colors underline underline-offset-2"
          >
            📦 Arquivo: Fase de Grupos (campeão: Diego)
          </Link>
        </p>
      </header>

      <div className="max-w-lg mx-auto px-4">
        {/* Ranking */}
        <section className="py-6">
          <h2 className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-4">
            🏆 Ranking — Mata-mata
          </h2>
          {tiers.length === 0 || maxPoints === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center text-slate-500 text-sm">
              Apostas ainda não cadastradas. Aguardando respostas.
            </div>
          ) : (
            tiers.map((entries, tierIndex) => (
              <ScoreCard
                key={`${entries[0].participant.id}-${entries[0].points}`}
                rank={tierIndex + 1}
                entries={entries}
                maxPoints={maxPoints}
              />
            ))
          )}
        </section>

        {/* Bracket */}
        <section className="py-2 pb-8">
          <h2 className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-1">
            🗓️ Chave do Mata-mata
          </h2>
          <p className="text-slate-600 text-[10px] mb-4 uppercase tracking-wider">
            Regra: Cada acerto = 1 ponto · Desempate por hora da aposta
          </p>

          {/* ── LADO ESQUERDO ── */}
          <div className="mb-6">
            <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-3 font-semibold">Lado esquerdo da chave</p>

            {/* 16 avos → Oitavas (esquerda) */}
            <div className="grid grid-cols-[1fr_6px_1fr] gap-x-0 items-stretch mb-3">
              <div className="flex flex-col gap-3">
                <BracketPair r16a={r16('R16-1')} r16b={r16('R16-2')} of={of('OF-1')} ofLabel="Oitavas 1" />
                <BracketPair r16a={r16('R16-3')} r16b={r16('R16-4')} of={of('OF-2')} ofLabel="Oitavas 2" />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex-1 border-r border-t border-slate-700 rounded-tr" />
                <div className="flex-1 border-r border-b border-slate-700 rounded-br" />
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['QF-1']} label="Quartas 1 · 09/07 17h" />
              </div>
            </div>

            <div className="grid grid-cols-[1fr_6px_1fr] gap-x-0 items-stretch mb-3">
              <div className="flex flex-col gap-3">
                <BracketPair r16a={r16('R16-5')} r16b={r16('R16-6')} of={of('OF-3')} ofLabel="Oitavas 3" />
                <BracketPair r16a={r16('R16-7')} r16b={r16('R16-8')} of={of('OF-4')} ofLabel="Oitavas 4" />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex-1 border-r border-t border-slate-700 rounded-tr" />
                <div className="flex-1 border-r border-b border-slate-700 rounded-br" />
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['QF-2']} label="Quartas 2 · 10/07 16h" />
              </div>
            </div>

            {/* Quartas → Semifinal 1 */}
            <div className="grid grid-cols-[1fr_6px_1fr] gap-x-0 items-stretch mt-2">
              <div className="flex flex-col gap-3">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['QF-1']} label="Quartas 1" compact />
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['QF-2']} label="Quartas 2" compact />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex-1 border-r border-t border-slate-700 rounded-tr" />
                <div className="flex-1 border-r border-b border-slate-700 rounded-br" />
              </div>
              <div className="flex items-center">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['SF-1']} label="Semifinal 1 · 14/07 16h" />
              </div>
            </div>
          </div>

          {/* ── LADO DIREITO ── */}
          <div className="mb-6">
            <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-3 font-semibold">Lado direito da chave</p>

            <div className="grid grid-cols-[1fr_6px_1fr] gap-x-0 items-stretch mb-3">
              <div className="flex flex-col gap-3">
                <BracketPair r16a={r16('R16-9')} r16b={r16('R16-10')} of={of('OF-5')} ofLabel="Oitavas 5" />
                <BracketPair r16a={r16('R16-11')} r16b={r16('R16-12')} of={of('OF-6')} ofLabel="Oitavas 6" />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex-1 border-r border-t border-slate-700 rounded-tr" />
                <div className="flex-1 border-r border-b border-slate-700 rounded-br" />
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['QF-3']} label="Quartas 3 · 11/07 18h" />
              </div>
            </div>

            <div className="grid grid-cols-[1fr_6px_1fr] gap-x-0 items-stretch mb-3">
              <div className="flex flex-col gap-3">
                <BracketPair r16a={r16('R16-13')} r16b={r16('R16-14')} of={of('OF-7')} ofLabel="Oitavas 7" />
                <BracketPair r16a={r16('R16-15')} r16b={r16('R16-16')} of={of('OF-8')} ofLabel="Oitavas 8" />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex-1 border-r border-t border-slate-700 rounded-tr" />
                <div className="flex-1 border-r border-b border-slate-700 rounded-br" />
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['QF-4']} label="Quartas 4 · 11/07 22h" />
              </div>
            </div>

            {/* Quartas → Semifinal 2 */}
            <div className="grid grid-cols-[1fr_6px_1fr] gap-x-0 items-stretch mt-2">
              <div className="flex flex-col gap-3">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['QF-3']} label="Quartas 3" compact />
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['QF-4']} label="Quartas 4" compact />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex-1 border-r border-t border-slate-700 rounded-tr" />
                <div className="flex-1 border-r border-b border-slate-700 rounded-br" />
              </div>
              <div className="flex items-center">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['SF-2']} label="Semifinal 2 · 15/07 16h" />
              </div>
            </div>
          </div>

          {/* ── FINAL ── */}
          <div className="mb-3">
            <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-3 font-semibold">Final</p>
            <div className="grid grid-cols-[1fr_6px_1fr] gap-x-0 items-stretch mb-3">
              <div className="flex flex-col gap-3">
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['SF-1']} label="Semifinal 1" compact />
                <BracketGameCard game={KNOCKOUT_GAMES_BY_ID['SF-2']} label="Semifinal 2" compact />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex-1 border-r border-t border-slate-700 rounded-tr" />
                <div className="flex-1 border-r border-b border-slate-700 rounded-br" />
              </div>
              <div className="flex items-center">
                <BracketGameCard
                  game={KNOCKOUT_GAMES_BY_ID['FINAL']}
                  label="🏆 Final · 19/07 16h"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
