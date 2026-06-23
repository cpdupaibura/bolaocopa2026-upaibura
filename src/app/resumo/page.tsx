import { PARTICIPANTS } from '@/data/participants';
import { displayName } from '@/lib/scoring';
import ApostadorCard from '@/components/ApostadorCard';

export default function ResumoPage() {
  const sorted = [...PARTICIPANTS].sort((a, b) =>
    displayName(a).localeCompare(displayName(b), 'pt')
  );

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <header className="bg-linear-to-b from-green-950 via-green-900/80 to-slate-950 px-4 pt-12 pb-6 text-center">
        <div className="text-4xl mb-2">📋</div>
        <h1 className="text-2xl font-extrabold text-white tracking-widest uppercase">Resumo</h1>
        <p className="text-slate-500 text-xs mt-1">Todos os apostadores · ordem alfabética</p>
      </header>

      <div className="max-w-lg mx-auto px-4">
        <div className="divide-y divide-slate-800">
          {sorted.map((participant) => (
            <div key={participant.id} className="py-8">
              <ApostadorCard participant={participant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
