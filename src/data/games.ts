import { Game } from '../lib/types';

export const GAMES: Game[] = [
  // ─── GRUPO A ───────────────────────────────────────────────
  { id: 'A1', group: 'A', round: 1, homeTeamId: 'mexico',       awayTeamId: 'south-africa', date: '2026-06-11' },
  { id: 'A2', group: 'A', round: 1, homeTeamId: 'south-korea',  awayTeamId: 'czechia',      date: '2026-06-12' },
  { id: 'A3', group: 'A', round: 2, homeTeamId: 'czechia',      awayTeamId: 'south-africa', date: '2026-06-18' },
  { id: 'A4', group: 'A', round: 2, homeTeamId: 'mexico',       awayTeamId: 'south-korea',  date: '2026-06-18' },
  { id: 'A5', group: 'A', round: 3, homeTeamId: 'czechia',      awayTeamId: 'mexico',       date: '2026-06-24' },
  { id: 'A6', group: 'A', round: 3, homeTeamId: 'south-africa', awayTeamId: 'south-korea',  date: '2026-06-24' },

  // ─── GRUPO B ───────────────────────────────────────────────
  { id: 'B1', group: 'B', round: 1, homeTeamId: 'canada',      awayTeamId: 'bosnia',       date: '2026-06-12' },
  { id: 'B2', group: 'B', round: 1, homeTeamId: 'qatar',       awayTeamId: 'switzerland',  date: '2026-06-13' },
  { id: 'B3', group: 'B', round: 2, homeTeamId: 'switzerland', awayTeamId: 'bosnia',       date: '2026-06-18' },
  { id: 'B4', group: 'B', round: 2, homeTeamId: 'canada',      awayTeamId: 'qatar',        date: '2026-06-18' },
  { id: 'B5', group: 'B', round: 3, homeTeamId: 'switzerland', awayTeamId: 'canada',       date: '2026-06-24' },
  { id: 'B6', group: 'B', round: 3, homeTeamId: 'bosnia',      awayTeamId: 'qatar',        date: '2026-06-24' },

  // ─── GRUPO C ───────────────────────────────────────────────
  { id: 'C1', group: 'C', round: 1, homeTeamId: 'brazil',   awayTeamId: 'morocco',  date: '2026-06-13' },
  { id: 'C2', group: 'C', round: 1, homeTeamId: 'haiti',    awayTeamId: 'scotland', date: '2026-06-13' },
  { id: 'C3', group: 'C', round: 2, homeTeamId: 'scotland', awayTeamId: 'morocco',  date: '2026-06-19' },
  { id: 'C4', group: 'C', round: 2, homeTeamId: 'brazil',   awayTeamId: 'haiti',    date: '2026-06-19' },
  { id: 'C5', group: 'C', round: 3, homeTeamId: 'scotland', awayTeamId: 'brazil',   date: '2026-06-25' },
  { id: 'C6', group: 'C', round: 3, homeTeamId: 'morocco',  awayTeamId: 'haiti',    date: '2026-06-25' },

  // ─── GRUPO D ───────────────────────────────────────────────
  { id: 'D1', group: 'D', round: 1, homeTeamId: 'usa',       awayTeamId: 'paraguay',  date: '2026-06-12' },
  { id: 'D2', group: 'D', round: 1, homeTeamId: 'australia', awayTeamId: 'turkey',    date: '2026-06-13' },
  { id: 'D3', group: 'D', round: 2, homeTeamId: 'turkey',    awayTeamId: 'paraguay',  date: '2026-06-19' },
  { id: 'D4', group: 'D', round: 2, homeTeamId: 'usa',       awayTeamId: 'australia', date: '2026-06-19' },
  { id: 'D5', group: 'D', round: 3, homeTeamId: 'turkey',    awayTeamId: 'usa',       date: '2026-06-25' },
  { id: 'D6', group: 'D', round: 3, homeTeamId: 'paraguay',  awayTeamId: 'australia', date: '2026-06-25' },

  // ─── GRUPO E ───────────────────────────────────────────────
  { id: 'E1', group: 'E', round: 1, homeTeamId: 'germany',      awayTeamId: 'curacao',      date: '2026-06-14' },
  { id: 'E2', group: 'E', round: 1, homeTeamId: 'ivory-coast',  awayTeamId: 'ecuador',      date: '2026-06-14' },
  { id: 'E3', group: 'E', round: 2, homeTeamId: 'germany',      awayTeamId: 'ivory-coast',  date: '2026-06-20' },
  { id: 'E4', group: 'E', round: 2, homeTeamId: 'ecuador',      awayTeamId: 'curacao',      date: '2026-06-20' },
  { id: 'E5', group: 'E', round: 3, homeTeamId: 'ecuador',      awayTeamId: 'germany',      date: '2026-06-26' },
  { id: 'E6', group: 'E', round: 3, homeTeamId: 'curacao',      awayTeamId: 'ivory-coast',  date: '2026-06-26' },

  // ─── GRUPO F ───────────────────────────────────────────────
  { id: 'F1', group: 'F', round: 1, homeTeamId: 'netherlands', awayTeamId: 'japan',       date: '2026-06-14' },
  { id: 'F2', group: 'F', round: 1, homeTeamId: 'sweden',      awayTeamId: 'tunisia',     date: '2026-06-14' },
  { id: 'F3', group: 'F', round: 2, homeTeamId: 'tunisia',     awayTeamId: 'japan',       date: '2026-06-20' },
  { id: 'F4', group: 'F', round: 2, homeTeamId: 'netherlands', awayTeamId: 'sweden',      date: '2026-06-20' },
  { id: 'F5', group: 'F', round: 3, homeTeamId: 'japan',       awayTeamId: 'sweden',      date: '2026-06-26' },
  { id: 'F6', group: 'F', round: 3, homeTeamId: 'tunisia',     awayTeamId: 'netherlands', date: '2026-06-26' },

  // ─── GRUPO G ───────────────────────────────────────────────
  { id: 'G1', group: 'G', round: 1, homeTeamId: 'belgium',     awayTeamId: 'egypt',        date: '2026-06-15' },
  { id: 'G2', group: 'G', round: 1, homeTeamId: 'iran',        awayTeamId: 'new-zealand',  date: '2026-06-15' },
  { id: 'G3', group: 'G', round: 2, homeTeamId: 'belgium',     awayTeamId: 'iran',         date: '2026-06-21' },
  { id: 'G4', group: 'G', round: 2, homeTeamId: 'new-zealand', awayTeamId: 'egypt',        date: '2026-06-21' },
  { id: 'G5', group: 'G', round: 3, homeTeamId: 'egypt',       awayTeamId: 'iran',         date: '2026-06-26' },
  { id: 'G6', group: 'G', round: 3, homeTeamId: 'new-zealand', awayTeamId: 'belgium',      date: '2026-06-26' },

  // ─── GRUPO H ───────────────────────────────────────────────
  { id: 'H1', group: 'H', round: 1, homeTeamId: 'spain',        awayTeamId: 'cape-verde',   date: '2026-06-15' },
  { id: 'H2', group: 'H', round: 1, homeTeamId: 'saudi-arabia', awayTeamId: 'uruguay',      date: '2026-06-15' },
  { id: 'H3', group: 'H', round: 2, homeTeamId: 'spain',        awayTeamId: 'saudi-arabia', date: '2026-06-21' },
  { id: 'H4', group: 'H', round: 2, homeTeamId: 'uruguay',      awayTeamId: 'cape-verde',   date: '2026-06-21' },
  { id: 'H5', group: 'H', round: 3, homeTeamId: 'cape-verde',   awayTeamId: 'saudi-arabia', date: '2026-06-26' },
  { id: 'H6', group: 'H', round: 3, homeTeamId: 'uruguay',      awayTeamId: 'spain',        date: '2026-06-26' },

  // ─── GRUPO I ───────────────────────────────────────────────
  { id: 'I1', group: 'I', round: 1, homeTeamId: 'france',  awayTeamId: 'senegal', date: '2026-06-16' },
  { id: 'I2', group: 'I', round: 1, homeTeamId: 'iraq',    awayTeamId: 'norway',  date: '2026-06-16' },
  { id: 'I3', group: 'I', round: 2, homeTeamId: 'france',  awayTeamId: 'iraq',    date: '2026-06-22' },
  { id: 'I4', group: 'I', round: 2, homeTeamId: 'norway',  awayTeamId: 'senegal', date: '2026-06-22' },
  { id: 'I5', group: 'I', round: 3, homeTeamId: 'norway',  awayTeamId: 'france',  date: '2026-06-27' },
  { id: 'I6', group: 'I', round: 3, homeTeamId: 'senegal', awayTeamId: 'iraq',    date: '2026-06-27' },

  // ─── GRUPO J ───────────────────────────────────────────────
  { id: 'J1', group: 'J', round: 1, homeTeamId: 'argentina', awayTeamId: 'algeria', date: '2026-06-16' },
  { id: 'J2', group: 'J', round: 1, homeTeamId: 'austria',   awayTeamId: 'jordan',  date: '2026-06-16' },
  { id: 'J3', group: 'J', round: 2, homeTeamId: 'argentina', awayTeamId: 'austria', date: '2026-06-22' },
  { id: 'J4', group: 'J', round: 2, homeTeamId: 'jordan',    awayTeamId: 'algeria', date: '2026-06-22' },
  { id: 'J5', group: 'J', round: 3, homeTeamId: 'algeria',   awayTeamId: 'austria',   date: '2026-06-27' },
  { id: 'J6', group: 'J', round: 3, homeTeamId: 'jordan',    awayTeamId: 'argentina', date: '2026-06-27' },

  // ─── GRUPO K ───────────────────────────────────────────────
  { id: 'K1', group: 'K', round: 1, homeTeamId: 'portugal',   awayTeamId: 'congo-dr',   date: '2026-06-17' },
  { id: 'K2', group: 'K', round: 1, homeTeamId: 'uzbekistan', awayTeamId: 'colombia',   date: '2026-06-17' },
  { id: 'K3', group: 'K', round: 2, homeTeamId: 'portugal',   awayTeamId: 'uzbekistan', date: '2026-06-23' },
  { id: 'K4', group: 'K', round: 2, homeTeamId: 'colombia',   awayTeamId: 'congo-dr',   date: '2026-06-23' },
  { id: 'K5', group: 'K', round: 3, homeTeamId: 'colombia',   awayTeamId: 'portugal',   date: '2026-06-27' },
  { id: 'K6', group: 'K', round: 3, homeTeamId: 'congo-dr',   awayTeamId: 'uzbekistan', date: '2026-06-27' },

  // ─── GRUPO L ───────────────────────────────────────────────
  { id: 'L1', group: 'L', round: 1, homeTeamId: 'england', awayTeamId: 'croatia', date: '2026-06-17' },
  { id: 'L2', group: 'L', round: 1, homeTeamId: 'ghana',   awayTeamId: 'panama',  date: '2026-06-17' },
  { id: 'L3', group: 'L', round: 2, homeTeamId: 'england', awayTeamId: 'ghana',   date: '2026-06-23' },
  { id: 'L4', group: 'L', round: 2, homeTeamId: 'panama',  awayTeamId: 'croatia', date: '2026-06-23' },
  { id: 'L5', group: 'L', round: 3, homeTeamId: 'panama',  awayTeamId: 'england', date: '2026-06-27' },
  { id: 'L6', group: 'L', round: 3, homeTeamId: 'croatia', awayTeamId: 'ghana',   date: '2026-06-27' },
];

export const GAMES_BY_ID: Record<string, Game> = Object.fromEntries(
  GAMES.map((g) => [g.id, g])
);

export const GAMES_BY_GROUP: Record<string, Game[]> = GAMES.reduce(
  (acc, g) => {
    if (!acc[g.group]) acc[g.group] = [];
    acc[g.group].push(g);
    return acc;
  },
  {} as Record<string, Game[]>
);
