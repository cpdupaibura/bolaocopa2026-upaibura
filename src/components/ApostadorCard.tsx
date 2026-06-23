import { BETS } from '@/data/bets';
import { RESULTS } from '@/data/results';
import { GAMES } from '@/data/games';
import { TEAMS } from '@/data/teams';
import { calculatePoints, betLabel } from '@/lib/scoring';
import { Participant } from '@/lib/types';
import AvatarImg from '@/components/AvatarImg';

const MONTHS_PT = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const DAYS_PT   = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${DAYS_PT[date.getDay()]}, ${d} de ${MONTHS_PT[m - 1]}`;
}

export default function ApostadorCard({ participant }: { participant: Participant }) {
  const myBets = BETS.filter((b) => b.participantId === participant.id);
  const betsById = Object.fromEntries(myBets.map((b) => [b.gameId, b.bet]));

  const playedGames = GAMES.filter((g) => g.id in RESULTS)
    .sort((a, b) => a.date.localeCompare(b.date));

  let totalPoints = 0;
  let simpleCorrect = 0;
  let advancedCorrect = 0;

  const rows = playedGames.map((game) => {
    const result = RESULTS[game.id];
    const bet    = betsById[game.id];
    const points = bet ? calculatePoints(bet, result) : 0;
    totalPoints += points;
    if (points > 0) bet?.type === 'simple' ? simpleCorrect++ : advancedCorrect++;
    return { game, result, bet, points,
      home: TEAMS[game.homeTeamId],
      away: TEAMS[game.awayTeamId],
    };
  });

  const byDate = new Map<string, typeof rows>();
  for (const row of rows) {
    if (!byDate.has(row.game.date)) byDate.set(row.game.date, []);
    byDate.get(row.game.date)!.push(row);
  }

  return (
    <>
      {/* Profile card */}
      <div className="flex items-center gap-4 mb-5 p-4 bg-slate-900 border border-slate-800 rounded-2xl">
        <AvatarImg id={participant.id} name={participant.name} avatarFile={participant.avatarFile} size={60} />
        <div className="flex-1 min-w-0">
          <div className="text-white font-bold text-lg leading-tight">{participant.name}</div>
          {participant.label && (
            <div className="text-slate-500 text-xs mt-0.5">{participant.label}</div>
          )}
        </div>
        <div className="text-right shrink-0">
          <div className="text-amber-400 font-extrabold text-3xl leading-none">{totalPoints}</div>
          <div className="text-slate-500 text-xs mt-0.5">pontos</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-emerald-400 font-extrabold text-xl">{simpleCorrect}</div>
          <div className="text-slate-500 text-[11px] mt-0.5">simples ✓</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-amber-400 font-extrabold text-xl">{advancedCorrect}</div>
          <div className="text-slate-500 text-[11px] mt-0.5">avançadas ✓</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-slate-300 font-extrabold text-xl">{playedGames.length}</div>
          <div className="text-slate-500 text-[11px] mt-0.5">jogados</div>
        </div>
      </div>

      {/* Timeline by date */}
      {Array.from(byDate.entries()).map(([date, dateRows]) => (
        <section key={date} className="mb-6">
          <h3 className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-2 px-1">
            {formatDate(date)}
          </h3>
          <div className="space-y-2">
            {dateRows.map(({ game, result, bet, points, home, away }) => {
              const tier = points === 3 ? 'gold' : points === 1 ? 'green' : 'none';
              return (
                <div
                  key={game.id}
                  className={`rounded-xl border px-3 py-2.5 ${
                    tier === 'gold'  ? 'bg-amber-950/30 border-amber-700/40' :
                    tier === 'green' ? 'bg-emerald-950/30 border-emerald-700/40' :
                                       'bg-slate-900 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold text-slate-600 w-5 shrink-0">{game.id}</span>
                    <span className="text-base leading-none shrink-0">{home?.flag}</span>
                    <span className="text-xs text-slate-300 flex-1 truncate">
                      {home?.name} × {away?.name}
                    </span>
                    <span className="text-base leading-none shrink-0">{away?.flag}</span>
                    <span className="text-xs font-bold text-slate-400 tabular-nums shrink-0">
                      {result.home}×{result.away}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 ml-7">
                    <span className="text-xs text-slate-500 flex-1 truncate">
                      {bet
                        ? betLabel(bet, home?.name ?? '', away?.name ?? '')
                        : <span className="text-slate-700">sem aposta</span>
                      }
                    </span>
                    <span className={`text-xs font-bold shrink-0 ${
                      tier === 'gold'  ? 'text-amber-400' :
                      tier === 'green' ? 'text-emerald-400' :
                                         'text-slate-600'
                    }`}>
                      {points > 0
                        ? `+${points} pt${points > 1 ? 's' : ''} ${points === 3 ? '🎯' : '✓'}`
                        : '✗ 0'
                      }
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {playedGames.length === 0 && (
        <p className="text-slate-600 text-sm text-center py-12">Nenhum jogo disputado ainda.</p>
      )}
    </>
  );
}
