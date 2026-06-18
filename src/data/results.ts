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
  'E2': { home: 1, away: 0 }, // Costa do Marfim 1×0 Equador
  'F2': { home: 5, away: 1 }, // Suécia 5×1 Tunísia
  'H1': { home: 0, away: 0 }, // Espanha 0×0 Cabo Verde
  'G1': { home: 1, away: 1 }, // Bélgica 1×1 Egito
  'H2': { home: 1, away: 1 }, // Arábia Saudita 1×1 Uruguai
  'G2': { home: 2, away: 2 }, // Irã 2×2 Nova Zelândia
  'I1': { home: 3, away: 1 }, // França 3×1 Senegal
  'I2': { home: 1, away: 4 }, // Iraque 1×4 Noruega
  'J1': { home: 3, away: 0 }, // Argentina 3×0 Argélia
  'J2': { home: 3, away: 1 }, // Áustria 3×1 Jordânia
  'K1': { home: 1, away: 1 }, // Portugal 1×1 Congo
  'L1': { home: 4, away: 2 }, // Inglaterra 4×2 Croácia
  'K2': { home: 1, away: 3 }, // Uzbequistão 1×3 Colômbia
  'L2': { home: 1, away: 0 }, // Gana 1×0 Panamá
  'A3': { home: 1, away: 1 }, // Rep. Tcheca 1x1 África do Sul
  'B3': { home: 4, away: 1 }, // Suíça 4×1 Bósnia
};
