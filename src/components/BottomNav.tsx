'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS = [
  { href: '/',            icon: '🏆', label: 'Ranking'  },
  { href: '/chave',       icon: '🗂️', label: 'Chave'    },
  { href: '/agenda',      icon: '📅', label: 'Agenda'   },
  { href: '/fase-grupos', icon: '📦', label: 'Grupos'   },
] as const;

export default function BottomNav() {
  const path = usePathname();

  function isActive(href: string) {
    if (href === '/') return path === '/';
    if (href === '/chave') return path.startsWith('/chave');
    if (href === '/fase-grupos') {
      return path.startsWith('/fase-grupos') || path.startsWith('/grupo') || path.startsWith('/partida');
    }
    return path.startsWith(href);
  }

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
      <div className="max-w-lg mx-auto flex h-16">
        {TABS.map(({ href, icon, label }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${
                active ? 'text-emerald-400' : 'text-slate-500 active:text-slate-300'
              }`}
            >
              <span className="text-2xl leading-none">{icon}</span>
              <span className={`text-[10px] font-bold tracking-wider uppercase ${active ? 'text-emerald-400' : 'text-slate-600'}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
