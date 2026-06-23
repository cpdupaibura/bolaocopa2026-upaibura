import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PARTICIPANTS } from '@/data/participants';
import { displayName } from '@/lib/scoring';
import ApostadorCard from '@/components/ApostadorCard';

export function generateStaticParams() {
  return PARTICIPANTS.map((p) => ({ id: p.id }));
}

export default async function ApostadorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const participant = PARTICIPANTS.find((p) => p.id === id);
  if (!participant) notFound();

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="text-slate-400 hover:text-white text-lg leading-none">←</Link>
          <span className="text-white font-bold text-sm truncate">{displayName(participant)}</span>
        </div>
      </div>
      <div className="max-w-lg mx-auto px-4 pt-5">
        <ApostadorCard participant={participant} />
      </div>
    </div>
  );
}
