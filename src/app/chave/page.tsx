import { Suspense } from 'react';
import ChaveContent from './ChaveContent';

export default function ChavePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <span className="text-slate-500 text-sm">Carregando chave...</span>
      </div>
    }>
      <ChaveContent />
    </Suspense>
  );
}
