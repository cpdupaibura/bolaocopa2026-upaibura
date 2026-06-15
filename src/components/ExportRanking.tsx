'use client';

import { useRef, useState, useCallback } from 'react';
import { toPng } from 'html-to-image';
import type { ParticipantScore } from '@/lib/types';

const MEDALS = ['🥇', '🥈', '🥉', '🏅'];
const G4 = 4;
const Z4 = 4;

function RankRow({
  rank,
  entry,
  style,
}: {
  rank: number;
  entry: ParticipantScore;
  style: 'gold' | 'normal' | 'danger';
}) {
  const p = entry.participant;
  const nameStr = p.label ? `${p.name} (${p.label})` : p.name;

  const rowBg =
    style === 'gold' ? '#1a2e1a' : style === 'danger' ? '#2a1010' : '#0f172a';
  const rankColor =
    style === 'gold' ? '#fbbf24' : style === 'danger' ? '#f87171' : '#64748b';
  const nameColor = style === 'danger' ? '#fca5a5' : '#f1f5f9';
  const ptsColor =
    style === 'gold' ? '#fbbf24' : style === 'danger' ? '#f87171' : '#e2e8f0';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 14px',
        background: rowBg,
        borderBottom: '1px solid #1e293b',
      }}
    >
      <span style={{ width: 22, textAlign: 'right', fontSize: 13, color: rankColor, fontWeight: 700, flexShrink: 0 }}>
        {rank <= 4 ? MEDALS[rank - 1] : rank}
      </span>

      {/* Avatar */}
      {p.avatarFile ? (
        <img
          src={`/avatar/${p.avatarFile}`}
          alt={p.name}
          width={36}
          height={36}
          style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: style === 'gold' ? '2px solid #fbbf24' : '1px solid #334155' }}
          crossOrigin="anonymous"
        />
      ) : (
        <InitialsBadge id={p.id} name={p.name} size={36} highlight={style === 'gold'} />
      )}

      <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: nameColor, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        {nameStr}
      </span>

      <span style={{ fontSize: 15, fontWeight: 800, color: ptsColor, flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>
        {entry.points}<span style={{ fontSize: 10, fontWeight: 400, color: '#64748b', marginLeft: 2 }}>pts</span>
      </span>
    </div>
  );
}

const COLORS = ['#047857','#0369a1','#7c3aed','#be185d','#b45309','#0f766e','#4338ca','#9d174d'];
function colorFor(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) & 0xffff;
  return COLORS[h % COLORS.length];
}
function InitialsBadge({ id, name, size, highlight }: { id: string; name: string; size: number; highlight: boolean }) {
  const initials = name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: colorFor(id),
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      border: highlight ? '2px solid #fbbf24' : '1px solid #334155',
    }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: size * 0.36 }}>{initials}</span>
    </div>
  );
}

function ShareCard({ leaderboard }: { leaderboard: ParticipantScore[] }) {
  const total = leaderboard.length;
  const g4 = leaderboard.slice(0, G4);
  const middle = leaderboard.slice(G4, total - Z4);
  const z4 = leaderboard.slice(total - Z4);

  const sectionHeader = (label: string, bg: string, color: string) => (
    <div style={{ padding: '6px 14px', background: bg, display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ color, fontWeight: 800, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' }}>{label}</span>
    </div>
  );

  return (
    <div style={{
      width: 480,
      background: '#020617',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      borderRadius: 16,
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(to bottom, #052e16, #0f172a)',
        padding: '20px 16px 16px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 36 }}>⚽</div>
        <div style={{ color: '#fff', fontWeight: 900, fontSize: 17, letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>
          Bolão Copa 2026 · UPA Ibura
        </div>
        <div style={{ color: '#6b7280', fontSize: 11, marginTop: 4 }}>
          Fase de Grupos — Classificação parcial
        </div>
      </div>

      {/* G4 */}
      {sectionHeader('🏆  G4 — Os Líderes', '#14532d', '#86efac')}
      {g4.map((e, i) => <RankRow key={e.participant.id} rank={i + 1} entry={e} style="gold" />)}

      {/* Meio */}
      {sectionHeader('📊  Meio da Tabela', '#1e293b', '#94a3b8')}
      {middle.map((e, i) => <RankRow key={e.participant.id} rank={G4 + i + 1} entry={e} style="normal" />)}

      {/* Z4 */}
      {sectionHeader('💀  Z4 — Zona de Rebaixamento', '#450a0a', '#fca5a5')}
      {z4.map((e, i) => <RankRow key={e.participant.id} rank={total - Z4 + i + 1} entry={e} style="danger" />)}

      {/* Footer */}
      <div style={{ padding: '10px 14px', background: '#0f172a', textAlign: 'center', color: '#374151', fontSize: 10 }}>
        bolão · UPA Ibura · 2026
      </div>
    </div>
  );
}

export default function ExportRanking({ leaderboard }: { leaderboard: ParticipantScore[] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleExport = useCallback(async () => {
    if (!cardRef.current) return;
    setLoading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2, cacheBust: true });

      if (typeof navigator !== 'undefined' && navigator.share) {
        const blob = await fetch(dataUrl).then((r) => r.blob());
        const file = new File([blob], 'bolao-ranking.png', { type: 'image/png' });
        await navigator.share({ files: [file], title: 'Bolão Copa 2026 — Ranking' });
      } else {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'bolao-ranking.png';
        a.click();
      }
    } catch (e) {
      console.error('Export failed', e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-bold rounded-xl text-sm transition-colors shadow"
      >
        📤 Exportar ranking
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center overflow-y-auto py-6 px-4">
          {/* Preview */}
          <div ref={cardRef} className="rounded-2xl overflow-hidden shadow-2xl">
            <ShareCard leaderboard={leaderboard} />
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6 mb-4">
            <button
              onClick={handleExport}
              disabled={loading}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-600 text-white font-bold rounded-full text-sm transition-colors shadow-lg"
            >
              {loading ? 'Gerando...' : '📥 Baixar / Compartilhar'}
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full text-sm transition-colors shadow-lg"
            >
              ✕ Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
