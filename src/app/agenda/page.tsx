import { KNOCKOUT_GAMES } from '@/data/knockout_games';
import { KNOCKOUT_RESULTS } from '@/data/knockout_results';
import { KNOCKOUT_GAMES_BY_ID } from '@/data/knockout_games';
import { TEAMS } from '@/data/teams';
import { KnockoutGame } from '@/lib/types';
import AgendaList, { DaySection, GameRow } from '@/components/AgendaList';

const MONTHS_PT = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const DAYS_PT   = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

function parseLabel(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${DAYS_PT[date.getDay()]}, ${d} de ${MONTHS_PT[m - 1]}`;
}

function gameShortId(game: KnockoutGame): string {
  return game.id
    .replace('R16-', 'J')
    .replace('OF-', 'Oit.')
    .replace('QF-', 'Qrt.')
    .replace('SF-', 'Semi ')
    .replace('FINAL', 'Final')
    .replace('TP', '3º');
}

/** Resolve qual time ocupa um slot (home ou away) num jogo. */
function slotTeam(
  game: KnockoutGame,
  side: 'home' | 'away',
  results: Record<string, 'a' | 'b'>
): { flag: string; name: string } {
  if (game.round === 'r16') {
    const id = side === 'home' ? game.homeTeamId : game.awayTeamId;
    const t = id ? TEAMS[id] : null;
    return { flag: t?.flag ?? '', name: t?.name ?? (side === 'home' ? game.homeLabel : game.awayLabel) };
  }

  const sourceId = side === 'home' ? game.homeSource : game.awaySource;
  if (!sourceId) return { flag: '', name: '?' };

  const sourceGame = KNOCKOUT_GAMES_BY_ID[sourceId];
  const sourceResult = results[sourceId];

  if (!sourceResult) {
    // Jogo-fonte ainda não foi jogado
    const label = side === 'home' ? game.homeLabel : game.awayLabel;
    return { flag: '', name: label };
  }

  // Resultado do jogo-fonte conhecido → resolve recursivamente
  const winningSide: 'home' | 'away' = sourceResult === 'a' ? 'home' : 'away';
  return slotTeam(sourceGame, winningSide, results);
}

/** Para o 3º lugar: o slot é o PERDEDOR da semifinal fonte. */
function tpSlotTeam(
  semiId: string,
  results: Record<string, 'a' | 'b'>
): { flag: string; name: string } {
  const semiGame = KNOCKOUT_GAMES_BY_ID[semiId];
  const semiResult = results[semiId];
  if (!semiResult || !semiGame) {
    return { flag: '', name: semiId === 'SF-1' ? 'Perd. Semifinal 1' : 'Perd. Semifinal 2' };
  }
  // Perdedor = o outro lado de quem venceu
  const losingSide: 'home' | 'away' = semiResult === 'a' ? 'away' : 'home';
  return slotTeam(semiGame, losingSide, results);
}

export default function AgendaPage() {
  const results = KNOCKOUT_RESULTS;
  const byDate = new Map<string, KnockoutGame[]>();

  for (const g of KNOCKOUT_GAMES) {
    if (!byDate.has(g.date)) byDate.set(g.date, []);
    byDate.get(g.date)!.push(g);
  }
  for (const games of byDate.values()) {
    games.sort((a, b) => (a.time ?? '').localeCompare(b.time ?? ''));
  }

  const days: DaySection[] = Array.from(byDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, games]) => {
      const rows: GameRow[] = games.map((g) => {
        const result = results[g.id] as 'a' | 'b' | undefined;
        const wonBy: 'home' | 'away' | undefined = result === 'a' ? 'home' : result === 'b' ? 'away' : undefined;

        let home: { flag: string; name: string };
        let away: { flag: string; name: string };

        if (g.round === 'tp') {
          home = tpSlotTeam('SF-1', results);
          away = tpSlotTeam('SF-2', results);
        } else {
          home = slotTeam(g, 'home', results);
          away = slotTeam(g, 'away', results);
        }

        return {
          id: gameShortId(g),
          time: g.time,
          homeFlag: home.flag,
          homeName: home.name,
          awayFlag: away.flag,
          awayName: away.name,
          wonBy,
        };
      });

      return {
        date,
        label: parseLabel(date),
        allPlayed: rows.every((r) => r.wonBy !== undefined),
        games: rows,
      };
    });

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3">
          <h1 className="text-white font-bold text-base">📅 Agenda — Mata-mata</h1>
        </div>
      </div>
      <AgendaList days={days} />
    </div>
  );
}
