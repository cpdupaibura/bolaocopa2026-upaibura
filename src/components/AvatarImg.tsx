'use client';

import { useState } from 'react';

const COLORS = [
  'bg-emerald-700',
  'bg-sky-700',
  'bg-violet-700',
  'bg-rose-700',
  'bg-amber-700',
  'bg-teal-700',
  'bg-indigo-700',
  'bg-pink-700',
];

function colorFor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) & 0xffff;
  return COLORS[hash % COLORS.length];
}

function Initials({ id, name, size, ring }: { id: string; name: string; size: number; ring: boolean }) {
  const initials = name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const ringClass = ring
    ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-950'
    : 'ring-1 ring-slate-700';
  return (
    <div
      className={`rounded-full shrink-0 flex items-center justify-center ${colorFor(id)} ${ringClass}`}
      style={{ width: size, height: size }}
    >
      <span className="text-white font-bold select-none" style={{ fontSize: size * 0.36 }}>
        {initials}
      </span>
    </div>
  );
}

export default function AvatarImg({
  id,
  name,
  avatarFile,
  size = 44,
  ring = false,
}: {
  id: string;
  name: string;
  avatarFile?: string;
  size?: number;
  ring?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const ringClass = ring
    ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-950'
    : 'ring-1 ring-slate-700';

  if (!avatarFile || failed) {
    return <Initials id={id} name={name} size={size} ring={ring} />;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setLightbox(true)}
        className={`rounded-full overflow-hidden shrink-0 cursor-pointer ${ringClass} focus:outline-none`}
        style={{ width: size, height: size }}
        aria-label={`Ver foto de ${name}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/avatar/${avatarFile}`}
          alt={name}
          width={size}
          height={size}
          className="object-cover w-full h-full"
          onError={() => setFailed(true)}
        />
      </button>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          <div className="flex flex-col items-center gap-3 p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/avatar/${avatarFile}`}
              alt={name}
              className="rounded-2xl max-w-[80vw] max-h-[70vh] object-contain shadow-2xl"
            />
            <span className="text-white font-bold text-lg">{name}</span>
            <button
              onClick={() => setLightbox(false)}
              className="px-6 py-2 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold rounded-full text-sm transition-colors shadow-lg"
            >
              ✕ Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
