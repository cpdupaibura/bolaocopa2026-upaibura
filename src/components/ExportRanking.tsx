'use client';

import { useRef, useState, useCallback } from 'react';
import { toPng } from 'html-to-image';
import type { ParticipantScore } from '@/lib/types';

const MEDALS: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' };
const G4 = 4;
const Z4 = 4;

function computeRanks(lb: ParticipantScore[]): number[] {
  return lb.map((entry) => lb.filter((e) => e.points > entry.points).length + 1);
}

const BG_COLORS = ['#047857','#0369a1','#7c3aed','#be185d','#b45309','#0f766e','#4338ca','#9d174d'];
function colorFor(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) & 0xffff;
  return BG_COLORS[h % BG_COLORS.length];
}

function InitialsBadge({ id, name, size, gold }: { id: string; name: string; size: number; gold: boolean }) {
  const initials = name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: colorFor(id),
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      border: gold ? '2px solid #fbbf24' : '1px solid #334155',
    }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: size * 0.36 }}>{initials}</span>
    </div>
  );
}

function RankRow({ rank, entry, zone }: { rank: number; entry: ParticipantScore; zone: 'gold' | 'normal' | 'danger' }) {
  const p = entry.participant;
  const label = p.label ? `${p.name} (${p.label})` : p.name;
  const rowBg  = zone === 'gold' ? '#1a2e1a' : zone === 'danger' ? '#2a1010' : '#0f172a';
  const numCol = zone === 'gold' ? '#fbbf24' : zone === 'danger' ? '#f87171' : '#64748b';
  const nameCol = zone === 'danger' ? '#fca5a5' : '#f1f5f9';
  const ptsCol = zone === 'gold' ? '#fbbf24' : zone === 'danger' ? '#f87171' : '#e2e8f0';
  const badge = MEDALS[rank] ?? String(rank);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: rowBg, borderBottom: '1px solid #1e293b' }}>
      <span style={{ width: 24, textAlign: 'center', fontSize: rank <= 3 ? 16 : 13, color: numCol, fontWeight: 700, flexShrink: 0 }}>
        {badge}
      </span>
      {p.avatarFile ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/avatar/${p.avatarFile}`} alt={p.name} width={36} height={36}
          style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: zone === 'gold' ? '2px solid #fbbf24' : '1px solid #334155' }}
        />
      ) : (
        <InitialsBadge id={p.id} name={p.name} size={36} gold={zone === 'gold'} />
      )}
      <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: nameCol, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        {label}
      </span>
      <span style={{ fontSize: 15, fontWeight: 800, color: ptsCol, flexShrink: 0 }}>
        {entry.points}<span style={{ fontSize: 10, fontWeight: 400, color: '#64748b', marginLeft: 2 }}>pts</span>
      </span>
    </div>
  );
}

function SectionHeader({ label, bg, color }: { label: string; bg: string; color: string }) {
  return (
    <div style={{ padding: '7px 14px', background: bg }}>
      <span style={{ color, fontWeight: 800, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' as const }}>{label}</span>
    </div>
  );
}

function ShareCard({ leaderboard }: { leaderboard: ParticipantScore[] }) {
  const total  = leaderboard.length;
  const g4     = leaderboard.slice(0, G4);
  const middle = leaderboard.slice(G4, total - Z4);
  const z4     = leaderboard.slice(total - Z4);
  const ranks  = computeRanks(leaderboard);

  return (
    <div style={{ width: 480, background: '#020617', fontFamily: 'system-ui, -apple-system, sans-serif', borderRadius: 16, overflow: 'hidden' }}>
      <div style={{ background: 'linear-gradient(to bottom, #052e16, #0f172a)', padding: '20px 16px 14px', textAlign: 'center' }}>
        <div style={{ fontSize: 34 }}>⚽</div>
        <div style={{ color: '#fff', fontWeight: 900, fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>
          Bolão Copa 2026 · UPA Ibura
        </div>
        <div style={{ color: '#6b7280', fontSize: 11, marginTop: 4 }}>Fase de Grupos — Classificação parcial</div>
      </div>

      <SectionHeader label="🏆  G4 — Os Líderes" bg="#14532d" color="#86efac" />
      {g4.map((e, i) => <RankRow key={e.participant.id} rank={ranks[i]} entry={e} zone="gold" />)}

      <SectionHeader label="📊  Meio da Tabela" bg="#1e293b" color="#94a3b8" />
      {middle.map((e, i) => <RankRow key={e.participant.id} rank={ranks[G4 + i]} entry={e} zone="normal" />)}

      <SectionHeader label="💀  Z4 — Zona de Rebaixamento" bg="#450a0a" color="#fca5a5" />
      {z4.map((e, i) => <RankRow key={e.participant.id} rank={ranks[total - Z4 + i]} entry={e} zone="danger" />)}

      <div style={{ padding: '8px 14px', background: '#0f172a', textAlign: 'center', color: '#374151', fontSize: 10 }}>
        bolão · UPA Ibura · 2026
      </div>
    </div>
  );
}

export default function ExportRanking({ leaderboard }: { leaderboard: ParticipantScore[] }) {
  // Capture target: always in DOM, off-screen — avoids overflow/scroll clipping issues
  const captureRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleExport = useCallback(async () => {
    if (!captureRef.current) return;
    setLoading(true);
    try {
      // Wait for any images still loading inside the capture div
      const imgs = Array.from(captureRef.current.querySelectorAll('img'));
      await Promise.all(imgs.map((img) =>
        img.complete ? Promise.resolve() : new Promise<void>((res) => { img.onload = () => res(); img.onerror = () => res(); })
      ));

      const dataUrl = await toPng(captureRef.current, { pixelRatio: 2, cacheBust: false });

      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'bolao-ranking.png';
      a.click();
    } catch (e) {
      console.error('Export failed', e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {/* Off-screen capture target — always rendered so images are pre-loaded */}
      <div
        ref={captureRef}
        aria-hidden="true"
        style={{ position: 'fixed', top: 0, left: '-9999px', zIndex: -1 }}
      >
        <ShareCard leaderboard={leaderboard} />
      </div>

      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-bold rounded-xl text-xs transition-colors"
      >
        📤 Exportar
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          {/* Top bar */}
          <div className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-slate-800">
            <span className="text-white font-bold text-sm">📊 Preview do Ranking</span>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white text-xl leading-none px-1">✕</button>
          </div>

          {/* Preview (visual only — not captured) */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: 480 }}>
              <ShareCard leaderboard={leaderboard} />
            </div>
          </div>

          {/* Sticky bottom actions */}
          <div className="shrink-0 flex gap-3 justify-center px-4 py-4 border-t border-slate-800 bg-black/80 pb-20">
            <button
              onClick={handleExport}
              disabled={loading}
              className="flex-1 max-w-56 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white font-bold rounded-full text-sm transition-colors"
            >
              {loading ? 'Gerando...' : '📥 Baixar imagem'}
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full text-sm transition-colors"
            >
              ✕ Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
