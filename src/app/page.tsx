import Link from 'next/link';
import { PARTICIPANTS } from '@/data/participants';
import { BETS } from '@/data/bets';
import { RESULTS } from '@/data/results';
import { GAMES_BY_GROUP } from '@/data/games';
import { TEAMS } from '@/data/teams';
import { calculateLeaderboard, displayName } from '@/lib/scoring';
import { Group, ParticipantScore } from '@/lib/types';
import AvatarImg from '@/components/AvatarImg';
import ExportRanking from '@/components/ExportRanking';

const ALL_GROUPS: Group[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const MEDALS = ['🥇', '🥈', '🥉'];

function LeaderboardRow({
  rank,
  entry,
  maxPoints,
}: {
  rank: number;
  entry: ParticipantScore;
  maxPoints: number;
}) {
  const pct = maxPoints > 0 ? Math.round((entry.points / maxPoints) * 100) : 0;
  const medal = rank <= 3 ? MEDALS[rank - 1] : null;
  const isTop = rank === 1;

  return (
    <div
      className={`rounded-xl p-4 mb-2 border ${
        isTop
          ? 'bg-amber-950/40 border-amber-700/50'
          : 'bg-slate-900 border-slate-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-slate-500 font-bold w-5 text-sm text-right shrink-0">{rank}</span>
        <AvatarImg
          id={entry.participant.id}
          name={entry.participant.name}
          avatarFile={entry.participant.avatarFile}
          size={44}
          ring={isTop}
        />
        <span className="font-bold text-white flex-1 text-base min-w-0">
          <span className="block truncate">{entry.participant.name}</span>
          {entry.participant.label && (
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
              {entry.participant.label}
            </span>
          )}
        </span>
        {medal && <span className="text-xl shrink-0">{medal}</span>}
        <span
          className={`font-extrabold text-lg tabular-nums shrink-0 ${
            isTop ? 'text-amber-400' : 'text-slate-200'
          }`}
        >
          {entry.points}
          <span className="text-xs font-normal text-slate-500 ml-1">pts</span>
        </span>
      </div>

      <div className="mt-2 ml-22 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${
            isTop ? 'bg-amber-400' : 'bg-emerald-600'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {(entry.simpleCorrect > 0 || entry.advancedCorrect > 0 || entry.gamesWithBets > 0) && (
        <div className="mt-1.5 ml-22 flex gap-3 text-xs text-slate-500">
          {entry.simpleCorrect > 0 && (
            <span className="text-emerald-500">{entry.simpleCorrect} simples ✓</span>
          )}
          {entry.advancedCorrect > 0 && (
            <span className="text-amber-500">{entry.advancedCorrect} avançadas ✓</span>
          )}
          <span>{entry.gamesWithBets} apostas</span>
        </div>
      )}
    </div>
  );
}

function GroupCard({ group }: { group: Group }) {
  const games = GAMES_BY_GROUP[group] ?? [];
  const teamIds = Array.from(
    new Set(games.flatMap((g) => [g.homeTeamId, g.awayTeamId]))
  ).slice(0, 4);
  const played = games.filter((g) => g.id in RESULTS).length;

  return (
    <Link href={`/grupo/${group}`} className="block">
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
}

function getDisplayRank(leaderboard: ParticipantScore[], index: number): number {
  return leaderboard.filter((e) => e.points > leaderboard[index].points).length + 1;
}

export default function Home() {
  const leaderboard = calculateLeaderboard(PARTICIPANTS, BETS, RESULTS);
  const maxPoints = leaderboard[0]?.points ?? 0;

  return (
    <div className="min-h-screen bg-slate-950 pb-10">
      {/* ── Header ── */}
      <header className="bg-linear-to-b from-green-950 via-green-900/80 to-slate-950 px-4 pt-12 pb-10 text-center">
        <div className="text-5xl mb-3">⚽</div>
        <h1 className="text-2xl font-extrabold text-white tracking-widest uppercase">
          Bolão Copa 2026 - UPA Ibura
        </h1>
        <p className="mt-1 text-base tracking-widest">🇧🇷&nbsp;&nbsp;🇺🇸&nbsp;&nbsp;🇨🇦&nbsp;&nbsp;🇲🇽</p>
        <p className="text-slate-500 text-xs mt-2">11 jun – 27 jun · Fase de Grupos</p>
      </header>

      <div className="max-w-lg mx-auto px-4">
        {/* ── Leaderboard ── */}
        <section className="py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-amber-400 font-bold text-xs tracking-widest uppercase">
              🏆 Classificação
            </h2>
            <ExportRanking leaderboard={leaderboard} />
          </div>
          {leaderboard.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center text-slate-500 text-sm">
              Apostas ainda não cadastradas
            </div>
          ) : (
            leaderboard.map((entry, i) => (
              <LeaderboardRow
                key={entry.participant.id}
                rank={getDisplayRank(leaderboard, i)}
                entry={entry}
                maxPoints={maxPoints}
              />
            ))
          )}
        </section>

        {/* ── Groups ── */}
        <section className="py-2">
          <h2 className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-4">
            ⚽ Grupos
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {ALL_GROUPS.map((g) => (
              <GroupCard key={g} group={g} />
            ))}
          </div>
        </section>

        {/* ── PDF Downloads ── */}
        <section className="py-6">
          <h2 className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-4">
            📄 Apostas Originais (PDF)
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-3">
              Fichas preenchidas manualmente para auditoria
            </p>
            <div className="flex flex-wrap gap-2">
              {PARTICIPANTS.filter((p) => p.pdfFile).map((p) => (
                <a
                  key={p.id}
                  href={`/pdfs/${p.pdfFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs transition-colors border border-slate-700"
                >
                  <span>📄</span>
                  <span>{displayName(p)}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
