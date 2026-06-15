'use client';

import { useState } from 'react';
import Image from 'next/image';

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
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const ringClass = ring
    ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-950'
    : 'ring-1 ring-slate-700';

  if (avatarFile && !failed) {
    return (
      <div
        className={`rounded-full overflow-hidden shrink-0 ${ringClass}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={`/avatar/${avatarFile}`}
          alt={name}
          width={size}
          height={size}
          className="object-cover w-full h-full"
          onError={() => setFailed(true)}
          unoptimized
        />
      </div>
    );
  }

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
