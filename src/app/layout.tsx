import type { Metadata, Viewport } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Bolão Copa 2026 - UPA Ibura',
  description: 'Classificação e apostas do bolão da Copa do Mundo 2026',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full pb-16">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
