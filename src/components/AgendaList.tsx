'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export type GameRow = {
  id: string;
  time?: string;
  homeFlag: string;
  homeName: string;
  awayFlag: string;
  awayName: string;
  result?: { home: number; away: number };
};

export type DaySection = {
  date: string;   // 'YYYY-MM-DD'
  label: string;
  allPlayed: boolean;
  games: GameRow[];
};

function toISO(d: Date) {
  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ].join('-');
}

export default function AgendaList({ days }: { days: DaySection[] }) {
  // Começa com todos abertos (seguro para SSR / hidratação)
  const [openDays, setOpenDays] = useState<Set<string>>(
    () => new Set(days.map((d) => d.date))
  );
  const [today, setToday] = useState('');

  // Após montar no cliente: colapsa dias passados e marca hoje
  useEffect(() => {
    const t = toISO(new Date());
    setToday(t);
    setOpenDays(new Set(days.filter((d) => d.date >= t).map((d) => d.date)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rola até o dia de hoje após o rerender que colapsa os passados
  useEffect(() => {
    if (!today) return;
    const el = document.querySelector('[data-today]') as HTMLElement | null;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, [today]);

  function toggle(date: string) {
    setOpenDays((prev) => {
      const next = new Set(prev);
      next.has(date) ? next.delete(date) : next.add(date);
      return next;
    });
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-3 pb-4">
      {days.map((day) => {
        const isOpen  = openDays.has(day.date);
        const isToday = today !== '' && day.date === today;
        const isPast  = today !== '' && day.date < today;

        return (
          <section
            key={day.date}
            className="mb-1"
            {...(isToday ? { 'data-today': '' } : {})}
          >
            {/* Cabeçalho clicável */}
            <button
              onClick={() => toggle(day.date)}
              className={`w-full flex items-center gap-2 px-2 py-2.5 rounded-lg text-left transition-colors ${
                isToday
                  ? 'bg-emerald-950/40 hover:bg-emerald-950/60'
                  : 'hover:bg-slate-900/60 active:bg-slate-900'
              }`}
            >
              <span
                className="text-slate-500 text-sm font-bold shrink-0 transition-transform duration-200"
                style={{ display: 'inline-block', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                ›
              </span>
              <span className={`font-bold text-sm flex-1 ${isPast ? 'text-slate-500' : 'text-slate-300'}`}>
                {day.label}
              </span>
              {isToday && (
                <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-widest shrink-0">
                  Hoje
                </span>
              )}
              {day.allPlayed && !isToday && (
                <span className="text-xs text-emerald-700 font-semibold shrink-0">✅ Encerrado</span>
              )}
              {!isOpen && (
                <span className="text-slate-600 text-xs shrink-0 ml-1">{day.games.length}j</span>
              )}
            </button>

            {/* Jogos do dia */}
            {isOpen && (
              <div className="space-y-2 pb-3">
                {day.games.map((game) => {
                  const played = game.result !== undefined;
                  return (
                    <Link key={game.id} href={`/partida/${game.id.toLowerCase()}`}>
                      <div
                        className={`flex items-center gap-2 rounded-xl px-3 py-3 border transition-colors ${
                          played
                            ? 'bg-slate-900 border-slate-800'
                            : 'bg-slate-900 border-slate-700 hover:border-emerald-700 active:border-emerald-500'
                        }`}
                      >
                        <span className="text-[10px] font-extrabold text-emerald-700 w-5 shrink-0">
                          {game.id}
                        </span>
                        <span className="text-xl leading-none shrink-0">{game.homeFlag}</span>
                        <span className="text-xs font-semibold text-slate-300 flex-1 truncate">
                          {game.homeName}
                        </span>
                        {played ? (
                          <span className="text-white font-extrabold tabular-nums text-base px-1 shrink-0">
                            {game.result!.home}&nbsp;×&nbsp;{game.result!.away}
                          </span>
                        ) : game.time ? (
                          <span className="text-amber-400 font-bold text-xs px-1 shrink-0 tabular-nums">
                            {game.time}
                          </span>
                        ) : (
                          <span className="text-slate-600 font-bold text-xs px-1 shrink-0">vs</span>
                        )}
                        <span className="text-xs font-semibold text-slate-300 flex-1 truncate text-right">
                          {game.awayName}
                        </span>
                        <span className="text-xl leading-none shrink-0">{game.awayFlag}</span>
                        <span className="text-slate-700 text-xs shrink-0">›</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
