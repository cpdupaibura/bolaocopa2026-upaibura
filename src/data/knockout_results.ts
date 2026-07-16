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
  'OF-1': 'b', // Paraguai 0x1 França
  'OF-2': 'b', // Canadá 0x3 Marrocos
  'OF-3': 'b', // Portugal 0x1 Espanha
  'OF-4': 'b', // Estados Unidos 1x4 Bélgica
  'OF-5': 'b', // Brasil 1x2 Noruega
  'OF-6': 'b', // México 2x3 Inglaterra
  'OF-7': 'a', // Argentina 3x2 Egito
  'OF-8': 'a', // Suíça 1x1 Colômbia (4x3 nos pênaltis)

  // ── Quartas de final ──────────────────────────────────────────────────────
  'QF-1': 'a', // França 2x0 Marrocos
  'QF-2': 'a', // Espanha 2x1 Bélgica
  'QF-3': 'b', // Noruega 1x2 Inglaterra (prorrogação)
  'QF-4': 'a', // Argentina 3x1 Suíça (prorrogação)

  // ── Semifinais ────────────────────────────────────────────────────────────
  'SF-1': 'b', // França 0x2 Espanha
  'SF-2': 'b', // Inglaterra 1x2 Argentina

  // ── Final ─────────────────────────────────────────────────────────────────
  'FINAL': 'b', // Espanha finalista
};
