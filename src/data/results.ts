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
};
