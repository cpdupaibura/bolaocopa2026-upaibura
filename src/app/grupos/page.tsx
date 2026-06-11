import Link from 'next/link';
import { GAMES_BY_GROUP } from '@/data/games';
import { TEAMS } from '@/data/teams';
import { RESULTS } from '@/data/results';
import { Group } from '@/lib/types';

const ALL_GROUPS: Group[] = ['A','B','C','D','E','F','G','H','I','J','K','L'];

export default function GruposPage() {
  return (
    <div className="min-h-screen bg-slate-950 pb-4">
      {/* Sticky header */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3">
          <h1 className="text-white font-bold text-base">⚽ Grupos</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {ALL_GROUPS.map((group) => {
            const games  = GAMES_BY_GROUP[group] ?? [];
            const teamIds = Array.from(
              new Set(games.flatMap((g) => [g.homeTeamId, g.awayTeamId]))
            ).slice(0, 4);
            const played = games.filter((g) => g.id in RESULTS).length;

            return (
              <Link key={group} href={`/grupo/${group}`} className="block">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 hover:border-emerald-700 active:border-emerald-600 transition-colors h-full">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-amber-400 font-extrabold text-sm">Grupo {group}</span>
                    {played > 0 && (
                      <span className="text-xs text-slate-600">{played}/6</span>
                    )}
                  </div>
                  <div className="space-y-1">
                    {teamIds.map((id) => {
                      const team = TEAMS[id];
                      if (!team) return null;
                      return (
                        <div key={id} className="flex items-center gap-1.5">
                          <span className="text-base leading-none">{team.flag}</span>
                          <span className="text-slate-300 text-xs truncate">{team.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
