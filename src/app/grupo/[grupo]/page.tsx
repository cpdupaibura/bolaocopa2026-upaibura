import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GAMES_BY_GROUP } from '@/data/games';
import { TEAMS } from '@/data/teams';
import { RESULTS } from '@/data/results';
import { BETS } from '@/data/bets';
import { Group, Game } from '@/lib/types';

const ALL_GROUPS: Group[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

const MONTHS = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];

function formatDate(dateStr: string): string {
  const [, m, d] = dateStr.split('-');
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]}`;
}

function GameCard({ game }: { game: Game }) {
  const home = TEAMS[game.homeTeamId];
  const away = TEAMS[game.awayTeamId];
  const result = RESULTS[game.id];
  const played = result !== undefined;
  const betCount = BETS.filter((b) => b.gameId === game.id).length;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-3">
      <div className="flex items-center justify-between gap-2 mb-3">
        {/* Home */}
        <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
          <span className="text-3xl">{home?.flag}</span>
          <span className="text-xs text-slate-300 font-semibold text-center truncate w-full">
            {home?.name}
          </span>
        </div>

        {/* Score / VS */}
        <div className="flex flex-col items-center gap-0.5 px-2">
          {played ? (
            <>
              <span className="text-2xl font-extrabold text-white tabular-nums">
                {result.home} × {result.away}
              </span>
              <span className="text-[10px] text-emerald-500 font-semibold uppercase tracking-wide">
                Encerrado
              </span>
            </>
          ) : (
            <>
              <span className="text-slate-600 font-bold text-lg">vs</span>
              <span className="text-[11px] text-slate-500">{formatDate(game.date)}</span>
              {game.time && (
                <span className="text-[11px] text-amber-500 font-semibold">{game.time}</span>
              )}
            </>
          )}
        </div>

        {/* Away */}
        <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
          <span className="text-3xl">{away?.flag}</span>
          <span className="text-xs text-slate-300 font-semibold text-center truncate w-full">
            {away?.name}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800">
        <span className="text-xs text-slate-600">
          {betCount > 0 ? `${betCount} apostas` : 'Sem apostas'}
        </span>
        <Link
          href={`/partida/${game.id.toLowerCase()}`}
          className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Ver apostas →
        </Link>
      </div>
    </div>
  );
}

export default async function GroupPage({
  params,
}: {
  params: Promise<{ grupo: string }>;
}) {
  const { grupo } = await params;
  const group = grupo.toUpperCase() as Group;

  if (!ALL_GROUPS.includes(group)) return notFound();

  const games = GAMES_BY_GROUP[group] ?? [];
  const teamIds = Array.from(new Set(games.flatMap((g) => [g.homeTeamId, g.awayTeamId])));
  const teams = teamIds.map((id) => TEAMS[id]).filter(Boolean);
  const rounds: (1 | 2 | 3)[] = [1, 2, 3];
  const playedCount = games.filter((g) => g.id in RESULTS).length;

  return (
    <div className="min-h-screen bg-slate-950 pb-10">
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
            ← Início
          </Link>
          <span className="text-slate-700">·</span>
          <span className="text-amber-400 font-extrabold">Grupo {group}</span>
          {playedCount > 0 && (
            <span className="ml-auto text-xs text-slate-600">{playedCount}/6 jogos</span>
          )}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-5">
        <div className="grid grid-cols-2 gap-2 mb-6">
          {teams.map((team) => (
            <div
              key={team!.id}
              className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2"
            >
              <span className="text-xl">{team!.flag}</span>
              <span className="text-sm text-slate-300 font-semibold">{team!.name}</span>
            </div>
          ))}
        </div>

        {rounds.map((round) => {
          const roundGames = games.filter((g) => g.round === round);
          if (roundGames.length === 0) return null;
          return (
            <div key={round} className="mb-2">
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">
                Rodada {round}
              </h3>
              {roundGames.map((g) => (
                <GameCard key={g.id} game={g} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return ['A','B','C','D','E','F','G','H','I','J','K','L'].map((grupo) => ({ grupo }));
}
