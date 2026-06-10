import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GAMES_BY_ID, GAMES } from '@/data/games';
import { TEAMS } from '@/data/teams';
import { RESULTS } from '@/data/results';
import { BETS } from '@/data/bets';
import { PARTICIPANTS } from '@/data/participants';
import { calculatePoints, betLabel, outcomeLabel, displayName } from '@/lib/scoring';
import { BetOutcome } from '@/lib/types';

const MONTHS = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];

function formatDate(dateStr: string): string {
  const [, m, d] = dateStr.split('-');
  return `${parseInt(d)} de ${MONTHS[parseInt(m) - 1]}`;
}

export default async function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const gameId = id.toUpperCase();
  const game = GAMES_BY_ID[gameId];

  if (!game) return notFound();

  const home = TEAMS[game.homeTeamId];
  const away = TEAMS[game.awayTeamId];
  const result = RESULTS[gameId];
  const played = result !== undefined;

  const gameBets = BETS.filter((b) => b.gameId === gameId);
  const participantsById = Object.fromEntries(PARTICIPANTS.map((p) => [p.id, p]));

  // For played games: calculate each participant's result
  const scoredBets = played
    ? gameBets.map((pb) => ({
        pb,
        participant: participantsById[pb.participantId],
        points: calculatePoints(pb.bet, result!),
        label: betLabel(pb.bet, home?.name ?? 'Casa', away?.name ?? 'Fora'),
      })).sort((a, b) => b.points - a.points)
    : null;

  // For upcoming games: group simple bets by outcome
  const simpleBetsByOutcome: Record<BetOutcome, string[]> = { home: [], away: [], draw: [] };
  const advancedBetsList: { name: string; label: string }[] = [];

  if (!played) {
    for (const pb of gameBets) {
      const p = participantsById[pb.participantId];
      if (!p) continue;
      if (pb.bet.type === 'simple') {
        simpleBetsByOutcome[pb.bet.outcome].push(displayName(p));
      } else {
        advancedBetsList.push({
          name: displayName(p),
          label: betLabel(pb.bet, home?.name ?? 'Casa', away?.name ?? 'Fora'),
        });
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 pb-10">
      {/* Sticky top nav */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-2 text-sm">
          <Link href={`/grupo/${game.group}`} className="text-slate-400 hover:text-white transition-colors">
            ← Grupo {game.group}
          </Link>
          <span className="text-slate-700">·</span>
          <span className="text-slate-500">Rodada {game.round}</span>
          <span className="ml-auto text-slate-600 text-xs">{gameId}</span>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* ── Game header ── */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between gap-4">
            {/* Home team */}
            <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
              <span className="text-5xl">{home?.flag}</span>
              <span className="text-sm font-bold text-white text-center">{home?.name}</span>
            </div>

            {/* Center: score or date */}
            <div className="flex flex-col items-center gap-1 px-3">
              {played ? (
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-white tabular-nums tracking-tight">
                    {result.home}&nbsp;×&nbsp;{result.away}
                  </div>
                  <div className="text-emerald-500 text-xs font-bold uppercase tracking-widest mt-1">
                    ✅ Encerrado
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-slate-600 font-extrabold text-xl">vs</div>
                  <div className="text-slate-400 text-xs mt-1">
                    ⏳ {formatDate(game.date)}
                  </div>
                </div>
              )}
            </div>

            {/* Away team */}
            <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
              <span className="text-5xl">{away?.flag}</span>
              <span className="text-sm font-bold text-white text-center">{away?.name}</span>
            </div>
          </div>
        </div>

        {/* ── Bets section ── */}
        <h2 className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-4">
          🎯 Apostas ({gameBets.length})
        </h2>

        {gameBets.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center text-slate-500 text-sm">
            Nenhuma aposta cadastrada para este jogo
          </div>
        ) : played ? (
          /* ── PLAYED: show results ── */
          <div className="space-y-2">
            {scoredBets!.map(({ pb, participant, points, label }) => {
              const won = points > 0;
              return (
                <div
                  key={pb.participantId}
                  className={`flex items-center gap-3 rounded-xl p-4 border ${
                    won
                      ? 'bg-emerald-950/40 border-emerald-800/60'
                      : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <span className="text-xl">{won ? '✅' : '❌'}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm">
                      {participant ? displayName(participant) : pb.participantId}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      <span
                        className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase mr-1.5 ${
                          pb.bet.type === 'advanced'
                            ? 'bg-amber-900/60 text-amber-400'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {pb.bet.type === 'advanced' ? 'Avançada' : 'Simples'}
                      </span>
                      {label}
                    </div>
                  </div>
                  <div
                    className={`font-extrabold text-base tabular-nums ${
                      won ? 'text-emerald-400' : 'text-slate-600'
                    }`}
                  >
                    {won ? `+${points}` : '0'}
                    <span className="text-xs font-normal ml-0.5">pts</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ── UPCOMING: show bet summary ── */
          <div className="space-y-4">
            {/* Simple bets grouped by outcome */}
            {(['home', 'draw', 'away'] as BetOutcome[]).map((outcome) => {
              const names = simpleBetsByOutcome[outcome];
              return (
                <div key={outcome} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-800`}
                    >
                      Simples
                    </span>
                    {outcomeLabel(outcome, home?.name ?? 'Casa', away?.name ?? 'Fora')}
                  </div>
                  {names.length === 0 ? (
                    <p className="text-slate-600 text-sm italic">Nenhuma aposta</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {names.map((name) => (
                        <span
                          key={name}
                          className="px-2.5 py-1 bg-slate-800 text-slate-200 rounded-full text-xs font-semibold"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Advanced bets */}
            {advancedBetsList.length > 0 && (
              <div className="bg-amber-950/30 border border-amber-800/50 rounded-xl p-4">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="inline-block px-1.5 py-0.5 rounded text-[10px] bg-amber-900/60">
                    Avançada
                  </span>
                  Placares exatos apostados
                </div>
                <div className="space-y-2">
                  {advancedBetsList.map(({ name, label }) => (
                    <div key={name} className="flex items-center gap-2">
                      <span className="font-bold text-amber-200 text-sm w-20 truncate">{name}:</span>
                      <span className="text-white text-sm font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return GAMES.map((g) => ({ id: g.id.toLowerCase() }));
}
