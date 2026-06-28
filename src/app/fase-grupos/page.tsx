import Link from 'next/link';
import { PARTICIPANTS } from '@/data/participants';
import { BETS } from '@/data/bets';
import { RESULTS } from '@/data/results';
import { GAMES_BY_GROUP } from '@/data/games';
import { TEAMS } from '@/data/teams';
import { calculateLeaderboard, displayName } from '@/lib/scoring';
import { Group, ParticipantScore } from '@/lib/types';
import AvatarImg from '@/components/AvatarImg';

const ALL_GROUPS: Group[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const MEDALS = ['🥇', '🥈', '🥉'];

function TiedGroupCard({
  rank,
  entries,
  maxPoints,
}: {
  rank: number;
  entries: ParticipantScore[];
  maxPoints: number;
}) {
  const pct = maxPoints > 0 ? Math.round((entries[0].points / maxPoints) * 100) : 0;
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
          className={`h-full rounded-full transition-all ${
            isTop ? 'bg-amber-400' : 'bg-emerald-600'
          }`}
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
              <Link href={`/apostador/${entry.participant.id}`} className="flex-1 min-w-0 group">
                <span className="block truncate font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                  {entry.participant.name}
                </span>
                {entry.participant.label && (
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    {entry.participant.label}
                  </span>
                )}
              </Link>
            </div>
            {(entry.simpleCorrect > 0 || entry.advancedCorrect > 0 || entry.gamesWithBets > 0) && (
              <div className="mt-1.5 ml-14 flex gap-3 text-xs text-slate-500">
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
        ))}
      </div>
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

export default function FaseGruposPage() {
  const leaderboard = calculateLeaderboard(PARTICIPANTS, BETS, RESULTS);
  const maxPoints = leaderboard[0]?.points ?? 0;

  const tiers: ParticipantScore[][] = [];
  for (const entry of leaderboard) {
    const last = tiers[tiers.length - 1];
    if (!last || last[0].points !== entry.points) {
      tiers.push([entry]);
    } else {
      last.push(entry);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      <header className="bg-linear-to-b from-slate-800 via-slate-900 to-slate-950 px-4 pt-12 pb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 text-sm mb-4 hover:text-slate-200 transition-colors">
          ← Voltar ao mata-mata
        </Link>
        <div className="text-4xl mb-2">📦</div>
        <h1 className="text-xl font-extrabold text-white tracking-widest uppercase">
          Fase de Grupos
        </h1>
        <p className="text-slate-500 text-xs mt-1">Arquivo · 11 jun – 27 jun 2026</p>
        <p className="text-amber-400 text-xs mt-2 font-semibold">🏆 Campeão: Diego Rodrigo</p>
      </header>

      <div className="max-w-lg mx-auto px-4">
        <section className="py-6">
          <h2 className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-4">
            Classificação Final
          </h2>
          {tiers.map((entries, tierIndex) => (
            <TiedGroupCard
              key={entries[0].points}
              rank={tierIndex + 1}
              entries={entries}
              maxPoints={maxPoints}
            />
          ))}
        </section>

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

        <section className="py-6">
          <h2 className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-4">
            📄 Apostas Originais (PDF)
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-3">
              Fichas preenchidas manualmente para auditoria
            </p>
            <div className="flex flex-wrap gap-2">
              {[...PARTICIPANTS]
                .filter((p) => p.pdfFile)
                .sort((a, b) => displayName(a).localeCompare(displayName(b), 'pt'))
                .map((p) => (
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
