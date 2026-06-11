import Link from 'next/link';
import { GAMES } from '@/data/games';
import { TEAMS } from '@/data/teams';
import { RESULTS } from '@/data/results';
import TodayBadge from '@/components/TodayBadge';

const MONTHS_PT = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const DAYS_PT   = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

function parseDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return {
    label: `${DAYS_PT[date.getDay()]}, ${d} de ${MONTHS_PT[m - 1]}`,
  };
}

export default function AgendaPage() {
  // Group games by date preserving insertion order
  const byDate = new Map<string, typeof GAMES>();
  for (const g of GAMES) {
    if (!byDate.has(g.date)) byDate.set(g.date, []);
    byDate.get(g.date)!.push(g);
  }

  return (
    <div className="min-h-screen bg-slate-950 pb-4">
      {/* Sticky header */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3">
          <h1 className="text-white font-bold text-base">📅 Agenda — Fase de Grupos</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-4 space-y-6">
        {Array.from(byDate.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([date, games]) => {
          const { label } = parseDate(date);
          const allPlayed = games.every((g) => g.id in RESULTS);

          return (
            <section key={date}>
              {/* Date heading */}
              <div className="flex items-center gap-2 mb-2 px-1">
                <span className="text-slate-300 font-bold text-sm">{label}</span>
                <TodayBadge date={date} />
                {allPlayed && (
                  <span className="text-xs text-emerald-700 font-semibold ml-auto">
                    ✅ Encerrado
                  </span>
                )}
              </div>

              {/* Game cards */}
              <div className="space-y-2">
                {games.map((game) => {
                  const home   = TEAMS[game.homeTeamId];
                  const away   = TEAMS[game.awayTeamId];
                  const result = RESULTS[game.id];
                  const played = result !== undefined;

                  return (
                    <Link key={game.id} href={`/partida/${game.id.toLowerCase()}`}>
                      <div
                        className={`flex items-center gap-2 rounded-xl px-3 py-3 border transition-colors ${
                          played
                            ? 'bg-slate-900 border-slate-800'
                            : 'bg-slate-900 border-slate-700 hover:border-emerald-700 active:border-emerald-500'
                        }`}
                      >
                        {/* ID */}
                        <span className="text-[10px] font-extrabold text-emerald-700 w-5 shrink-0">
                          {game.id}
                        </span>

                        {/* Home */}
                        <span className="text-xl leading-none shrink-0">{home?.flag}</span>
                        <span className="text-xs font-semibold text-slate-300 flex-1 truncate">
                          {home?.name}
                        </span>

                        {/* Score / vs */}
                        {played ? (
                          <span className="text-white font-extrabold tabular-nums text-base px-1 shrink-0">
                            {result.home}&nbsp;×&nbsp;{result.away}
                          </span>
                        ) : (
                          <span className="text-slate-600 font-bold text-xs px-1 shrink-0">vs</span>
                        )}

                        {/* Away */}
                        <span className="text-xs font-semibold text-slate-300 flex-1 truncate text-right">
                          {away?.name}
                        </span>
                        <span className="text-xl leading-none shrink-0">{away?.flag}</span>

                        {/* Arrow */}
                        <span className="text-slate-700 text-xs shrink-0">›</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
