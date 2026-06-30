import { KnockoutBet } from '../lib/types';

/**
 * APOSTAS DA FASE MATA-MATA
 * =========================
 * pick: 'a' = time/lado de cima (home)
 *       'b' = time/lado de baixo (away)
 *
 * 16 avos: 'a' = time da casa passa, 'b' = visitante passa
 * Oitavas+: 'a' = lado A vence, 'b' = lado B vence
 */
export const KNOCKOUT_BETS: KnockoutBet[] = [
  // Ionaldo Lins (ionaldo-jr)
  { participantId: 'ionaldo-jr', gameId: 'R16-1',  pick: 'a' }, // Alemanha
  { participantId: 'ionaldo-jr', gameId: 'R16-2',  pick: 'a' }, // França
  { participantId: 'ionaldo-jr', gameId: 'R16-3',  pick: 'b' }, // Canadá
  { participantId: 'ionaldo-jr', gameId: 'R16-4',  pick: 'b' }, // Marrocos
  { participantId: 'ionaldo-jr', gameId: 'R16-5',  pick: 'b' }, // Croácia
  { participantId: 'ionaldo-jr', gameId: 'R16-6',  pick: 'a' }, // Espanha
  { participantId: 'ionaldo-jr', gameId: 'R16-7',  pick: 'a' }, // Estados Unidos
  { participantId: 'ionaldo-jr', gameId: 'R16-8',  pick: 'a' }, // Bélgica
  { participantId: 'ionaldo-jr', gameId: 'R16-9',  pick: 'a' }, // Brasil
  { participantId: 'ionaldo-jr', gameId: 'R16-10', pick: 'a' }, // Costa do Marfim
  { participantId: 'ionaldo-jr', gameId: 'R16-11', pick: 'a' }, // México
  { participantId: 'ionaldo-jr', gameId: 'R16-12', pick: 'a' }, // Inglaterra
  { participantId: 'ionaldo-jr', gameId: 'R16-13', pick: 'a' }, // Argentina
  { participantId: 'ionaldo-jr', gameId: 'R16-14', pick: 'b' }, // Egito
  { participantId: 'ionaldo-jr', gameId: 'R16-15', pick: 'a' }, // Suíça
  { participantId: 'ionaldo-jr', gameId: 'R16-16', pick: 'a' }, // Colômbia

  { participantId: 'ionaldo-jr', gameId: 'QF-1', pick: 'b' }, // França
  { participantId: 'ionaldo-jr', gameId: 'QF-2', pick: 'b' }, // Marrocos
  { participantId: 'ionaldo-jr', gameId: 'QF-3', pick: 'b' }, // Espanha
  { participantId: 'ionaldo-jr', gameId: 'QF-4', pick: 'a' }, // Estados Unidos
  { participantId: 'ionaldo-jr', gameId: 'QF-5', pick: 'a' }, // Brasil
  { participantId: 'ionaldo-jr', gameId: 'QF-6', pick: 'a' }, // México
  { participantId: 'ionaldo-jr', gameId: 'QF-7', pick: 'a' }, // Argentina
  { participantId: 'ionaldo-jr', gameId: 'QF-8', pick: 'b' }, // Colômbia

  { participantId: 'ionaldo-jr', gameId: 'SF-1', pick: 'a' }, // França
  { participantId: 'ionaldo-jr', gameId: 'SF-2', pick: 'a' }, // Espanha
  { participantId: 'ionaldo-jr', gameId: 'SF-3', pick: 'a' }, // Brasil
  { participantId: 'ionaldo-jr', gameId: 'SF-4', pick: 'a' }, // Argentina

  { participantId: 'ionaldo-jr', gameId: 'SEMI-1', pick: 'b' }, // Espanha
  { participantId: 'ionaldo-jr', gameId: 'SEMI-2', pick: 'a' }, // Brasil

  { participantId: 'ionaldo-jr', gameId: 'FINAL', pick: 'b' }, // Brasil campeão
];
