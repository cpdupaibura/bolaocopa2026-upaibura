/**
 * Resultados dos jogos do mata-mata.
 * 'a' = time/lado de cima (home) venceu
 * 'b' = time/lado de baixo (away) venceu
 */
export const KNOCKOUT_RESULTS: Record<string, 'a' | 'b'> = {
  'R16-1': 'b', // Paraguai 1x1 Alemanha (Paraguai venceu nos pênaltis)
  'R16-3': 'b', // Canadá 1x0 África do Sul
  'R16-4': 'b', // Marrocos 1x1 Holanda (Marrocos venceu nos pênaltis)
  'R16-9': 'a', // Brasil 2x1 Japão
  'R16-10': 'b', // Noruega 2x1 Costa do Marfim
  'R16-2': 'a',  // França 3x0 Suécia
  'R16-11': 'a',  // México 2x0 Equador
  'R16-12': 'a',  // Inglaterra 2x1 RD Congo (virada)
};
