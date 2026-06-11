'use client';
import { useEffect, useState } from 'react';

export default function TodayBadge({ date }: { date: string }) {
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const now = new Date();
    const today = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0'),
    ].join('-');
    setIsToday(date === today);
  }, [date]);

  if (!isToday) return null;

  return (
    <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-widest">
      Hoje
    </span>
  );
}
