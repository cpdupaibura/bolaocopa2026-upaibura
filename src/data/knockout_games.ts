import { KnockoutGame } from '../lib/types';

/**
 * Jogos do mata-mata.
 *
 * R16: 16 avos de final (jogos 1–16), numerados por posição no chaveamento.
 * QF:  Oitavas de final (8 jogos)
 * SF:  Quartas de final (4 jogos)
 * SEMI: Semifinais (2 jogos)
 * TP:  Terceiro lugar
 * FINAL
 *
 * Para apostar:
 *   R16 → pick é o time que passa ('a' = time de cima, 'b' = time de baixo)
 *   QF+ → pick é a posição vencedora ('a' = lado A, 'b' = lado B)
 */
export const KNOCKOUT_GAMES: KnockoutGame[] = [
  // ── 16 AVOS DE FINAL ──────────────────────────────────────────────────────
  // Jogo 1 → Oitavas 1 (posição A)
  { id: 'R16-1',  round: 'r16', date: '2026-06-29', time: '17h30', homeTeamId: 'germany',      awayTeamId: 'paraguay',   homeLabel: 'Alemanha',       awayLabel: 'Paraguai'    },
  // Jogo 2 → Oitavas 1 (posição B)
  { id: 'R16-2',  round: 'r16', date: '2026-06-30', time: '18h00', homeTeamId: 'france',        awayTeamId: 'sweden',     homeLabel: 'França',         awayLabel: 'Suécia'      },
  // Jogo 3 → Oitavas 2 (posição A)
  { id: 'R16-3',  round: 'r16', date: '2026-06-28', time: '16h00', homeTeamId: 'south-africa',  awayTeamId: 'canada',     homeLabel: 'África do Sul',  awayLabel: 'Canadá'      },
  // Jogo 4 → Oitavas 2 (posição B)
  { id: 'R16-4',  round: 'r16', date: '2026-06-29', time: '22h00', homeTeamId: 'netherlands',   awayTeamId: 'morocco',    homeLabel: 'Holanda',        awayLabel: 'Marrocos'    },
  // Jogo 5 → Oitavas 3 (posição A)
  { id: 'R16-5',  round: 'r16', date: '2026-07-02', time: '20h00', homeTeamId: 'portugal',      awayTeamId: 'croatia',    homeLabel: 'Portugal',       awayLabel: 'Croácia'     },
  // Jogo 6 → Oitavas 3 (posição B)
  { id: 'R16-6',  round: 'r16', date: '2026-07-02', time: '16h00', homeTeamId: 'spain',         awayTeamId: 'austria',    homeLabel: 'Espanha',        awayLabel: 'Áustria'     },
  // Jogo 7 → Oitavas 4 (posição A)
  { id: 'R16-7',  round: 'r16', date: '2026-07-01', time: '21h00', homeTeamId: 'usa',           awayTeamId: 'bosnia',     homeLabel: 'EUA',            awayLabel: 'Bósnia'      },
  // Jogo 8 → Oitavas 4 (posição B)
  { id: 'R16-8',  round: 'r16', date: '2026-07-01', time: '17h00', homeTeamId: 'belgium',       awayTeamId: 'senegal',    homeLabel: 'Bélgica',        awayLabel: 'Senegal'     },
  // Jogo 9 → Oitavas 5 (posição A)
  { id: 'R16-9',  round: 'r16', date: '2026-06-29', time: '14h00', homeTeamId: 'brazil',        awayTeamId: 'japan',      homeLabel: 'Brasil',         awayLabel: 'Japão'       },
  // Jogo 10 → Oitavas 5 (posição B)
  { id: 'R16-10', round: 'r16', date: '2026-06-30', time: '14h00', homeTeamId: 'ivory-coast',   awayTeamId: 'norway',     homeLabel: 'C. Marfim',      awayLabel: 'Noruega'     },
  // Jogo 11 → Oitavas 6 (posição A)
  { id: 'R16-11', round: 'r16', date: '2026-06-30', time: '22h00', homeTeamId: 'mexico',        awayTeamId: 'ecuador',    homeLabel: 'México',         awayLabel: 'Equador'     },
  // Jogo 12 → Oitavas 6 (posição B)
  { id: 'R16-12', round: 'r16', date: '2026-07-01', time: '13h00', homeTeamId: 'england',       awayTeamId: 'congo-dr',   homeLabel: 'Inglaterra',     awayLabel: 'RD Congo'    },
  // Jogo 13 → Oitavas 7 (posição A)
  { id: 'R16-13', round: 'r16', date: '2026-07-03', time: '19h00', homeTeamId: 'argentina',     awayTeamId: 'cape-verde', homeLabel: 'Argentina',      awayLabel: 'Cabo Verde'  },
  // Jogo 14 → Oitavas 7 (posição B)
  { id: 'R16-14', round: 'r16', date: '2026-07-03', time: '15h00', homeTeamId: 'australia',     awayTeamId: 'egypt',      homeLabel: 'Austrália',      awayLabel: 'Egito'       },
  // Jogo 15 → Oitavas 8 (posição A)
  { id: 'R16-15', round: 'r16', date: '2026-07-03', time: '00h00', homeTeamId: 'switzerland',   awayTeamId: 'algeria',    homeLabel: 'Suíça',          awayLabel: 'Argélia'     },
  // Jogo 16 → Oitavas 8 (posição B)
  { id: 'R16-16', round: 'r16', date: '2026-07-03', time: '22h30', homeTeamId: 'colombia',      awayTeamId: 'ghana',      homeLabel: 'Colômbia',       awayLabel: 'Gana'        },

  // ── OITAVAS DE FINAL ──────────────────────────────────────────────────────
  { id: 'QF-1',  round: 'qf', date: '2026-07-04', time: '18h00', homeSource: 'R16-1',  awaySource: 'R16-2',  homeLabel: 'Venc. Jogo 1',  awayLabel: 'Venc. Jogo 2'  },
  { id: 'QF-2',  round: 'qf', date: '2026-07-04', time: '14h00', homeSource: 'R16-3',  awaySource: 'R16-4',  homeLabel: 'Venc. Jogo 3',  awayLabel: 'Venc. Jogo 4'  },
  { id: 'QF-3',  round: 'qf', date: '2026-07-06', time: '16h00', homeSource: 'R16-5',  awaySource: 'R16-6',  homeLabel: 'Venc. Jogo 5',  awayLabel: 'Venc. Jogo 6'  },
  { id: 'QF-4',  round: 'qf', date: '2026-07-06', time: '21h00', homeSource: 'R16-7',  awaySource: 'R16-8',  homeLabel: 'Venc. Jogo 7',  awayLabel: 'Venc. Jogo 8'  },
  { id: 'QF-5',  round: 'qf', date: '2026-07-05', time: '17h00', homeSource: 'R16-9',  awaySource: 'R16-10', homeLabel: 'Venc. Jogo 9',  awayLabel: 'Venc. Jogo 10' },
  { id: 'QF-6',  round: 'qf', date: '2026-07-05', time: '21h00', homeSource: 'R16-11', awaySource: 'R16-12', homeLabel: 'Venc. Jogo 11', awayLabel: 'Venc. Jogo 12' },
  { id: 'QF-7',  round: 'qf', date: '2026-07-07', time: '13h00', homeSource: 'R16-13', awaySource: 'R16-14', homeLabel: 'Venc. Jogo 13', awayLabel: 'Venc. Jogo 14' },
  { id: 'QF-8',  round: 'qf', date: '2026-07-07', time: '17h00', homeSource: 'R16-15', awaySource: 'R16-16', homeLabel: 'Venc. Jogo 15', awayLabel: 'Venc. Jogo 16' },

  // ── QUARTAS DE FINAL ──────────────────────────────────────────────────────
  { id: 'SF-1',  round: 'sf', date: '2026-07-09', time: '17h00', homeSource: 'QF-1',  awaySource: 'QF-2',  homeLabel: 'Venc. Oitavas 1', awayLabel: 'Venc. Oitavas 2' },
  { id: 'SF-2',  round: 'sf', date: '2026-07-10', time: '16h00', homeSource: 'QF-3',  awaySource: 'QF-4',  homeLabel: 'Venc. Oitavas 3', awayLabel: 'Venc. Oitavas 4' },
  { id: 'SF-3',  round: 'sf', date: '2026-07-11', time: '18h00', homeSource: 'QF-5',  awaySource: 'QF-6',  homeLabel: 'Venc. Oitavas 5', awayLabel: 'Venc. Oitavas 6' },
  { id: 'SF-4',  round: 'sf', date: '2026-07-11', time: '22h00', homeSource: 'QF-7',  awaySource: 'QF-8',  homeLabel: 'Venc. Oitavas 7', awayLabel: 'Venc. Oitavas 8' },

  // ── SEMIFINAIS ────────────────────────────────────────────────────────────
  { id: 'SEMI-1', round: 'semi', date: '2026-07-14', time: '16h00', homeSource: 'SF-1', awaySource: 'SF-2', homeLabel: 'Venc. Quartas 1', awayLabel: 'Venc. Quartas 2' },
  { id: 'SEMI-2', round: 'semi', date: '2026-07-15', time: '16h00', homeSource: 'SF-3', awaySource: 'SF-4', homeLabel: 'Venc. Quartas 3', awayLabel: 'Venc. Quartas 4' },

  // ── TERCEIRO LUGAR ────────────────────────────────────────────────────────
  { id: 'TP',    round: 'tp',    date: '2026-07-18', time: '18h00', homeSource: 'SEMI-1', awaySource: 'SEMI-2', homeLabel: 'Perd. Semifinal 1', awayLabel: 'Perd. Semifinal 2' },

  // ── FINAL ─────────────────────────────────────────────────────────────────
  { id: 'FINAL', round: 'final', date: '2026-07-19', time: '16h00', homeSource: 'SEMI-1', awaySource: 'SEMI-2', homeLabel: 'Venc. Semifinal 1', awayLabel: 'Venc. Semifinal 2' },
];

export const KNOCKOUT_GAMES_BY_ID: Record<string, KnockoutGame> = Object.fromEntries(
  KNOCKOUT_GAMES.map((g) => [g.id, g])
);

export const R16_GAMES    = KNOCKOUT_GAMES.filter((g) => g.round === 'r16');
export const QF_GAMES     = KNOCKOUT_GAMES.filter((g) => g.round === 'qf');
export const SF_GAMES     = KNOCKOUT_GAMES.filter((g) => g.round === 'sf');
export const SEMI_GAMES   = KNOCKOUT_GAMES.filter((g) => g.round === 'semi');
export const TP_GAME      = KNOCKOUT_GAMES.find((g) => g.round === 'tp')!;
export const FINAL_GAME   = KNOCKOUT_GAMES.find((g) => g.round === 'final')!;
