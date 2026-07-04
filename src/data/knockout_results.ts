/**
 * Resultados dos jogos do mata-mata.
 * 'a' = time/lado de cima (home) venceu
 * 'b' = time/lado de baixo (away) venceu
 *
 * Quando um jogo terminar: descomente a linha, troque 'a'/'b' pelo lado
 * vencedor e escreva o placar no comentário.
 */
export const KNOCKOUT_RESULTS: Record<string, 'a' | 'b'> = {
  // ── 16 avos de final ──────────────────────────────────────────────────────
  'R16-1': 'b', // Paraguai 1x1 Alemanha (Paraguai venceu nos pênaltis)
  'R16-2': 'a', // França 3x0 Suécia
  'R16-3': 'b', // Canadá 1x0 África do Sul
  'R16-4': 'b', // Marrocos 1x1 Holanda (Marrocos venceu nos pênaltis)
  'R16-5': 'a', // Portugal 2x1 Croácia
  'R16-6': 'a', // Espanha 3x0 Áustria
  'R16-7': 'a', // Estados Unidos 2x0 Bósnia
  'R16-8': 'a', // Bélgica 3x2 Senegal
  'R16-9': 'a', // Brasil 2x1 Japão
  'R16-10': 'b', // Noruega 2x1 Costa do Marfim
  'R16-11': 'a', // México 2x0 Equador
  'R16-12': 'a', // Inglaterra 2x1 RD Congo (virada)
  'R16-13': 'a', // Argentina 3x2 Cabo Verde (prorrogação)
  'R16-14': 'b', // Austrália 2x4 Egito (pênaltis)
  'R16-15': 'a', // Suíça 2x0 Argélia
  'R16-16': 'a', // Colômbia 1x0 Gana

  // ── Oitavas de final ──────────────────────────────────────────────────────
  // 'OF-1': 'a', // Vencedor Jogo 1 x Vencedor Jogo 2
  'OF-2': 'b', // Canadá 0x3 Marrocos
  // 'OF-3': 'a', // Vencedor Jogo 5 x Vencedor Jogo 6
  // 'OF-4': 'a', // Vencedor Jogo 7 x Vencedor Jogo 8
  // 'OF-5': 'a', // Vencedor Jogo 9 x Vencedor Jogo 10
  // 'OF-6': 'a', // Vencedor Jogo 11 x Vencedor Jogo 12
  // 'OF-7': 'a', // Vencedor Jogo 13 x Vencedor Jogo 14
  // 'OF-8': 'a', // Vencedor Jogo 15 x Vencedor Jogo 16

  // ── Quartas de final ──────────────────────────────────────────────────────
  // 'QF-1': 'a', // Vencedor Oitavas 1 x Vencedor Oitavas 2
  // 'QF-2': 'a', // Vencedor Oitavas 3 x Vencedor Oitavas 4
  // 'QF-3': 'a', // Vencedor Oitavas 5 x Vencedor Oitavas 6
  // 'QF-4': 'a', // Vencedor Oitavas 7 x Vencedor Oitavas 8

  // ── Semifinais ────────────────────────────────────────────────────────────
  // 'SF-1': 'a', // Vencedor Quartas 1 x Vencedor Quartas 2
  // 'SF-2': 'a', // Vencedor Quartas 3 x Vencedor Quartas 4

  // ── Final ─────────────────────────────────────────────────────────────────
  // 'FINAL': 'a', // Vencedor Semifinal 1 x Vencedor Semifinal 2
};
