import { GAMES } from '@/data/games';
import { TEAMS } from '@/data/teams';
import { RESULTS } from '@/data/results';
import AgendaList, { DaySection } from '@/components/AgendaList';

const MONTHS_PT = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const DAYS_PT   = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

function parseLabel(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${DAYS_PT[date.getDay()]}, ${d} de ${MONTHS_PT[m - 1]}`;
}

export default function AgendaPage() {
  const byDate = new Map<string, typeof GAMES>();
  for (const g of GAMES) {
    if (!byDate.has(g.date)) byDate.set(g.date, []);
    byDate.get(g.date)!.push(g);
  }
  for (const games of byDate.values()) {
    games.sort((a, b) => (a.time ?? '').localeCompare(b.time ?? ''));
  }

  const days: DaySection[] = Array.from(byDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, games]) => ({
      date,
      label: parseLabel(date),
      allPlayed: games.every((g) => g.id in RESULTS),
      games: games.map((g) => ({
        id: g.id,
        time: g.time,
        homeFlag: TEAMS[g.homeTeamId]?.flag ?? '',
        homeName: TEAMS[g.homeTeamId]?.name ?? '',
        awayFlag: TEAMS[g.awayTeamId]?.flag ?? '',
        awayName: TEAMS[g.awayTeamId]?.name ?? '',
        result: RESULTS[g.id],
      })),
    }));

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3">
          <h1 className="text-white font-bold text-base">📅 Agenda — Fase de Grupos</h1>
        </div>
      </div>
      <AgendaList days={days} />
    </div>
  );
}
