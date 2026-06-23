import Link from 'next/link';
import { PARTICIPANTS } from '@/data/participants';
import { BETS } from '@/data/bets';
import { RESULTS } from '@/data/results';
import { GAMES } from '@/data/games';
import { calculateLeaderboard, displayName } from '@/lib/scoring';
import AvatarImg from '@/components/AvatarImg';

export default function ResumoPage() {
  const leaderboard = calculateLeaderboard(PARTICIPANTS, BETS, RESULTS);
  const pointsById = Object.fromEntries(leaderboard.map((e) => [e.participant.id, e.points]));
  const playedCount = GAMES.filter((g) => g.id in RESULTS).length;

  const sorted = [...PARTICIPANTS].sort((a, b) =>
    displayName(a).localeCompare(displayName(b), 'pt')
  );

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <header className="bg-linear-to-b from-green-950 via-green-900/80 to-slate-950 px-4 pt-12 pb-8 text-center">
        <div className="text-4xl mb-2">📋</div>
        <h1 className="text-2xl font-extrabold text-white tracking-widest uppercase">Resumo</h1>
        <p className="text-slate-500 text-xs mt-1">
          {sorted.length} apostadores · {playedCount} jogos disputados
        </p>
      </header>

      <div className="max-w-lg mx-auto px-4 pt-6">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {sorted.map((p) => {
            const pts = pointsById[p.id] ?? 0;
            return (
              <Link
                key={p.id}
                href={`/apostador/${p.id}`}
                className="group flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-700 active:border-emerald-500 transition-colors"
              >
                {/* Avatar grande */}
                <div className="relative">
                  <AvatarImg
                    id={p.id}
                    name={p.name}
                    avatarFile={p.avatarFile}
                    size={72}
                    ring={false}
                  />
                </div>

                {/* Nome */}
                <span className="text-white text-xs font-bold text-center leading-tight line-clamp-2 group-hover:text-emerald-400 transition-colors w-full">
                  {displayName(p)}
                </span>

                {/* Pontos */}
                <span className="text-amber-400 font-extrabold text-sm tabular-nums leading-none">
                  {pts}
                  <span className="text-slate-600 font-normal text-[10px] ml-0.5">pts</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
