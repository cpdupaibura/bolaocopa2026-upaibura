import { GameResult } from '../lib/types';

/**
 * RESULTADOS DOS JOGOS
 *
 * Adicione o resultado após cada jogo disputado.
 * home = gols do time da casa (primeiro da lista)
 * away = gols do time visitante (segundo da lista)
 *
 * Exemplo:
 *   'C1': { home: 2, away: 0 },  // Brasil 2 x 0 Marrocos
 */
export const RESULTS: Record<string, GameResult> = {
  'A1': { home: 2, away: 0 }, // México 2×0 África do Sul
  'A2': { home: 2, away: 1 }, // Coreia do Sul 2×1 Rep. Tcheca
  'B1': { home: 1, away: 1 }, // Canadá 1×1 Bósnia
  'D1': { home: 4, away: 1 }, // EUA 4×1 Paraguai
  'C1': { home: 1, away: 1 }, // Brasil 1×1 Marrocos
  'B2': { home: 1, away: 1 }, // Catar 1×1 Suíça
  'C2': { home: 0, away: 1 }, // Haiti 0×1 Escócia
  'D2': { home: 2, away: 0 }, // Austrália 2×0 Turquia
  'E1': { home: 7, away: 1 }, // Alemanha 7×1 Curaçao
  'F1': { home: 2, away: 2 }, // Holanda 2×2 Japão
};
