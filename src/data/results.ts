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
  'B4': { home: 6, away: 0 }, // Canadá 6×0 Catar
  'D3': { home: 0, away: 1 }, // Turquia 0×1 Paraguai
  'E3': { home: 2, away: 1 }, // Alemanha 2×1 Costa do Marfim
  'E4': { home: 0, away: 0 }, // Equador 0×0 Curaçao
  'F3': { home: 0, away: 4 }, // Tunísia 0×4 Japão
  'H3': { home: 4, away: 0 }, // Espanha 4×0 Arábia Saudita
  'G3': { home: 0, away: 0 }, // Bélgica 0×0 Irã
  'H4': { home: 2, away: 2 }, // Uruguai 2×2 Cabo Verde
  'G4': { home: 1, away: 3 }, // Nova Zelândia 1×3 Egito
  'J3': { home: 2, away: 0 }, // Argentina 2×0 Áustria
  'I3': { home: 3, away: 0 }, // França 3×0 Iraque
  'I4': { home: 3, away: 2 }, // Noruega 3×2 Senegal
  'F4': { home: 5, away: 1 }, // Holanda 5×1 Suécia
  'A4': { home: 1, away: 0 }, // México 1×0 Coreia do Sul
  'D4': { home: 2, away: 0 }, // EUA 2 x 0 Australia
  'C3': { home: 0, away: 1 }, // Escócia 0 x 1 Marrocos
  'C4': { home: 3, away: 0 }, // Brasil 3 x Haiti
  'J4': { home: 1, away: 2 }, // Jordânia 1 x 2 Argélia
  'K3': { home: 5, away: 0 }, // Portugal 5×0 Uzbequistão
  'D5': { home: 3, away: 2 }, // Turquia 3×2 EUA
  'D6': { home: 0, away: 0 }, // Paraguai 0×0 Austrália
  'E5': { home: 2, away: 1 }, // Equador 2×1 Alemanha
  'E6': { home: 0, away: 2 }, // Curaçao 0×2 Costa do Marfim
  'F5': { home: 1, away: 1 }, // Japão 1×1 Suécia
  'F6': { home: 1, away: 3 }, // Tunísia 1×3 Holanda
  'A5': { home: 0, away: 3 }, // Rep. Tcheca 0×3 México
  'A6': { home: 1, away: 0 }, // África do Sul 1×0 Coreia do Sul
  'B5': { home: 2, away: 1 }, // Suíça 2×1 Canadá
  'B6': { home: 3, away: 1 }, // Bósnia 3×1 Catar
  'C5': { home: 0, away: 3 }, // Escócia 0×3 Brasil
  'C6': { home: 4, away: 2 }, // Marrocos 4×2 Haiti
  'K4': { home: 1, away: 0 }, // Colômbia 1×0 Congo
  'L3': { home: 0, away: 0 }, // Inglaterra 0×0 Gana
  'L4': { home: 0, away: 1 }, // Panamá 0×1 Croácia
  'I5': { home: 1, away: 4 }, // Noruega 1×4 França
  'I6': { home: 5, away: 0 }, // Senegal 5×0 Iraque
  'H5': { home: 0, away: 0 }, // Cabo Verde 0×0 Arábia Saudita
  'H6': { home: 0, away: 1 }, // Uruguai 0×1 Espanha
  'G5': { home: 1, away: 1 }, // Egito 1×1 Irã
  'G6': { home: 1, away: 5 }, // Nova Zelândia 1×5 Bélgica
};
