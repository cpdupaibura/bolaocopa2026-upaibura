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
  { participantId: 'ionaldo-jr', gameId: 'R16-1', pick: 'a' }, // Alemanha
  { participantId: 'ionaldo-jr', gameId: 'R16-2', pick: 'a' }, // França
  { participantId: 'ionaldo-jr', gameId: 'R16-3', pick: 'b' }, // Canadá
  { participantId: 'ionaldo-jr', gameId: 'R16-4', pick: 'b' }, // Marrocos
  { participantId: 'ionaldo-jr', gameId: 'R16-5', pick: 'b' }, // Croácia
  { participantId: 'ionaldo-jr', gameId: 'R16-6', pick: 'a' }, // Espanha
  { participantId: 'ionaldo-jr', gameId: 'R16-7', pick: 'a' }, // Estados Unidos
  { participantId: 'ionaldo-jr', gameId: 'R16-8', pick: 'a' }, // Bélgica
  { participantId: 'ionaldo-jr', gameId: 'R16-9', pick: 'a' }, // Brasil
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

  // Jorginho (jorge-edson)
  { participantId: 'jorge-edson', gameId: 'R16-1', pick: 'b' }, // Paraguai
  { participantId: 'jorge-edson', gameId: 'R16-2', pick: 'a' }, // França
  { participantId: 'jorge-edson', gameId: 'R16-3', pick: 'b' }, // Canadá
  { participantId: 'jorge-edson', gameId: 'R16-4', pick: 'b' }, // Marrocos
  { participantId: 'jorge-edson', gameId: 'R16-5', pick: 'a' }, // Portugal
  { participantId: 'jorge-edson', gameId: 'R16-6', pick: 'a' }, // Espanha
  { participantId: 'jorge-edson', gameId: 'R16-7', pick: 'a' }, // Estados Unidos
  { participantId: 'jorge-edson', gameId: 'R16-8', pick: 'a' }, // Bélgica
  { participantId: 'jorge-edson', gameId: 'R16-9', pick: 'a' }, // Brasil
  { participantId: 'jorge-edson', gameId: 'R16-10', pick: 'b' }, // Noruega
  { participantId: 'jorge-edson', gameId: 'R16-11', pick: 'a' }, // México
  { participantId: 'jorge-edson', gameId: 'R16-12', pick: 'a' }, // Inglaterra
  { participantId: 'jorge-edson', gameId: 'R16-13', pick: 'a' }, // Argentina
  { participantId: 'jorge-edson', gameId: 'R16-14', pick: 'a' }, // Austrália
  { participantId: 'jorge-edson', gameId: 'R16-15', pick: 'a' }, // Suíça
  { participantId: 'jorge-edson', gameId: 'R16-16', pick: 'a' }, // Colômbia

  { participantId: 'jorge-edson', gameId: 'QF-1', pick: 'b' }, // França
  { participantId: 'jorge-edson', gameId: 'QF-2', pick: 'b' }, // Marrocos
  { participantId: 'jorge-edson', gameId: 'QF-3', pick: 'b' }, // Espanha
  { participantId: 'jorge-edson', gameId: 'QF-4', pick: 'a' }, // Estados Unidos
  { participantId: 'jorge-edson', gameId: 'QF-5', pick: 'b' }, // Noruega
  { participantId: 'jorge-edson', gameId: 'QF-6', pick: 'b' }, // Inglaterra
  { participantId: 'jorge-edson', gameId: 'QF-7', pick: 'a' }, // Argentina
  { participantId: 'jorge-edson', gameId: 'QF-8', pick: 'b' }, // Colômbia

  { participantId: 'jorge-edson', gameId: 'SF-1', pick: 'a' }, // França
  { participantId: 'jorge-edson', gameId: 'SF-2', pick: 'a' }, // Espanha
  { participantId: 'jorge-edson', gameId: 'SF-3', pick: 'b' }, // Inglaterra
  { participantId: 'jorge-edson', gameId: 'SF-4', pick: 'b' }, // Argentina

  { participantId: 'jorge-edson', gameId: 'SEMI-1', pick: 'a' }, // França
  { participantId: 'jorge-edson', gameId: 'SEMI-2', pick: 'b' }, // Argentina

  { participantId: 'jorge-edson', gameId: 'FINAL', pick: 'a' }, // França campeã

  // Eduardo Alex (eduardo-alex)
  { participantId: 'eduardo-alex', gameId: 'R16-1', pick: 'a' }, // Alemanha
  { participantId: 'eduardo-alex', gameId: 'R16-2', pick: 'a' }, // França
  { participantId: 'eduardo-alex', gameId: 'R16-3', pick: 'b' }, // Canadá
  { participantId: 'eduardo-alex', gameId: 'R16-4', pick: 'a' }, // Holanda
  { participantId: 'eduardo-alex', gameId: 'R16-5', pick: 'a' }, // Portugal
  { participantId: 'eduardo-alex', gameId: 'R16-6', pick: 'a' }, // Espanha
  { participantId: 'eduardo-alex', gameId: 'R16-7', pick: 'a' }, // Estados Unidos
  { participantId: 'eduardo-alex', gameId: 'R16-8', pick: 'b' }, // Senegal
  { participantId: 'eduardo-alex', gameId: 'R16-9', pick: 'a' }, // Brasil
  { participantId: 'eduardo-alex', gameId: 'R16-10', pick: 'b' }, // Noruega
  { participantId: 'eduardo-alex', gameId: 'R16-11', pick: 'a' }, // México
  { participantId: 'eduardo-alex', gameId: 'R16-12', pick: 'a' }, // Inglaterra
  { participantId: 'eduardo-alex', gameId: 'R16-13', pick: 'a' }, // Argentina
  { participantId: 'eduardo-alex', gameId: 'R16-14', pick: 'b' }, // Egito
  { participantId: 'eduardo-alex', gameId: 'R16-15', pick: 'a' }, // Suíça
  { participantId: 'eduardo-alex', gameId: 'R16-16', pick: 'a' }, // Colômbia

  { participantId: 'eduardo-alex', gameId: 'QF-1', pick: 'b' }, // França
  { participantId: 'eduardo-alex', gameId: 'QF-2', pick: 'a' }, // Holanda
  { participantId: 'eduardo-alex', gameId: 'QF-3', pick: 'a' }, // Portugal
  { participantId: 'eduardo-alex', gameId: 'QF-4', pick: 'a' }, // Estados Unidos
  { participantId: 'eduardo-alex', gameId: 'QF-5', pick: 'a' }, // Brasil
  { participantId: 'eduardo-alex', gameId: 'QF-6', pick: 'b' }, // Inglaterra
  { participantId: 'eduardo-alex', gameId: 'QF-7', pick: 'a' }, // Argentina
  { participantId: 'eduardo-alex', gameId: 'QF-8', pick: 'b' }, // Colômbia

  { participantId: 'eduardo-alex', gameId: 'SF-1', pick: 'a' }, // França
  { participantId: 'eduardo-alex', gameId: 'SF-2', pick: 'a' }, // Portugal
  { participantId: 'eduardo-alex', gameId: 'SF-3', pick: 'a' }, // Brasil
  { participantId: 'eduardo-alex', gameId: 'SF-4', pick: 'b' }, // Argentina

  { participantId: 'eduardo-alex', gameId: 'SEMI-1', pick: 'a' }, // França
  { participantId: 'eduardo-alex', gameId: 'SEMI-2', pick: 'b' }, // Argentina

  { participantId: 'eduardo-alex', gameId: 'FINAL', pick: 'a' }, // França campeã

  // João Paulo (joao-paulo-1)
{ participantId: 'joao-paulo-1', gameId: 'R16-1',  pick: 'a' }, // Alemanha
{ participantId: 'joao-paulo-1', gameId: 'R16-2',  pick: 'a' }, // França
{ participantId: 'joao-paulo-1', gameId: 'R16-3',  pick: 'b' }, // Canadá
{ participantId: 'joao-paulo-1', gameId: 'R16-4',  pick: 'b' }, // Marrocos
{ participantId: 'joao-paulo-1', gameId: 'R16-5',  pick: 'b' }, // Croácia
{ participantId: 'joao-paulo-1', gameId: 'R16-6',  pick: 'a' }, // Espanha
{ participantId: 'joao-paulo-1', gameId: 'R16-7',  pick: 'b' }, // Bósnia
{ participantId: 'joao-paulo-1', gameId: 'R16-8',  pick: 'a' }, // Bélgica
{ participantId: 'joao-paulo-1', gameId: 'R16-9',  pick: 'a' }, // Brasil
{ participantId: 'joao-paulo-1', gameId: 'R16-10', pick: 'b' }, // Noruega
{ participantId: 'joao-paulo-1', gameId: 'R16-11', pick: 'a' }, // México
{ participantId: 'joao-paulo-1', gameId: 'R16-12', pick: 'a' }, // Inglaterra
{ participantId: 'joao-paulo-1', gameId: 'R16-13', pick: 'a' }, // Argentina
{ participantId: 'joao-paulo-1', gameId: 'R16-14', pick: 'a' }, // Austrália
{ participantId: 'joao-paulo-1', gameId: 'R16-15', pick: 'a' }, // Suíça
{ participantId: 'joao-paulo-1', gameId: 'R16-16', pick: 'a' }, // Colômbia

{ participantId: 'joao-paulo-1', gameId: 'QF-1', pick: 'b' }, // França
{ participantId: 'joao-paulo-1', gameId: 'QF-2', pick: 'b' }, // Marrocos
{ participantId: 'joao-paulo-1', gameId: 'QF-3', pick: 'b' }, // Espanha
{ participantId: 'joao-paulo-1', gameId: 'QF-4', pick: 'b' }, // Bélgica
{ participantId: 'joao-paulo-1', gameId: 'QF-5', pick: 'a' }, // Brasil
{ participantId: 'joao-paulo-1', gameId: 'QF-6', pick: 'b' }, // Inglaterra
{ participantId: 'joao-paulo-1', gameId: 'QF-7', pick: 'a' }, // Argentina
{ participantId: 'joao-paulo-1', gameId: 'QF-8', pick: 'b' }, // Colômbia

{ participantId: 'joao-paulo-1', gameId: 'SF-1', pick: 'a' }, // França
{ participantId: 'joao-paulo-1', gameId: 'SF-2', pick: 'b' }, // Espanha
{ participantId: 'joao-paulo-1', gameId: 'SF-3', pick: 'a' }, // Brasil
{ participantId: 'joao-paulo-1', gameId: 'SF-4', pick: 'b' }, // Argentina

{ participantId: 'joao-paulo-1', gameId: 'SEMI-1', pick: 'b' }, // Brasil
{ participantId: 'joao-paulo-1', gameId: 'SEMI-2', pick: 'a' }, // França

{ participantId: 'joao-paulo-1', gameId: 'FINAL', pick: 'b' }, // Brasil campeã

// Igor (igor)
{ participantId: 'igor', gameId: 'R16-1',  pick: 'a' }, // Alemanha
{ participantId: 'igor', gameId: 'R16-2',  pick: 'a' }, // França
{ participantId: 'igor', gameId: 'R16-3',  pick: 'b' }, // Canadá
{ participantId: 'igor', gameId: 'R16-4',  pick: 'a' }, // Holanda
{ participantId: 'igor', gameId: 'R16-5',  pick: 'a' }, // Portugal
{ participantId: 'igor', gameId: 'R16-6',  pick: 'a' }, // Espanha
{ participantId: 'igor', gameId: 'R16-7',  pick: 'a' }, // Estados Unidos
{ participantId: 'igor', gameId: 'R16-8',  pick: 'b' }, // Senegal
{ participantId: 'igor', gameId: 'R16-9',  pick: 'a' }, // Brasil
{ participantId: 'igor', gameId: 'R16-10', pick: 'b' }, // Noruega
{ participantId: 'igor', gameId: 'R16-11', pick: 'b' }, // Equador
{ participantId: 'igor', gameId: 'R16-12', pick: 'a' }, // Inglaterra
{ participantId: 'igor', gameId: 'R16-13', pick: 'a' }, // Argentina
{ participantId: 'igor', gameId: 'R16-14', pick: 'b' }, // Egito
{ participantId: 'igor', gameId: 'R16-15', pick: 'b' }, // Argélia
{ participantId: 'igor', gameId: 'R16-16', pick: 'a' }, // Colômbia

{ participantId: 'igor', gameId: 'QF-1', pick: 'b' }, // França
{ participantId: 'igor', gameId: 'QF-2', pick: 'a' }, // Holanda
{ participantId: 'igor', gameId: 'QF-3', pick: 'b' }, // Espanha
{ participantId: 'igor', gameId: 'QF-4', pick: 'b' }, // Senegal
{ participantId: 'igor', gameId: 'QF-5', pick: 'a' }, // Brasil
{ participantId: 'igor', gameId: 'QF-6', pick: 'b' }, // Inglaterra
{ participantId: 'igor', gameId: 'QF-7', pick: 'a' }, // Argentina
{ participantId: 'igor', gameId: 'QF-8', pick: 'b' }, // Colômbia

{ participantId: 'igor', gameId: 'SF-1', pick: 'a' }, // França
{ participantId: 'igor', gameId: 'SF-2', pick: 'b' }, // Espanha
{ participantId: 'igor', gameId: 'SF-3', pick: 'a' }, // Brasil
{ participantId: 'igor', gameId: 'SF-4', pick: 'b' }, // Argentina

{ participantId: 'igor', gameId: 'SEMI-1', pick: 'a' }, // França
{ participantId: 'igor', gameId: 'SEMI-2', pick: 'b' }, // Argentina

{ participantId: 'igor', gameId: 'FINAL', pick: 'a' }, // França campeã

// Bruno (bruno-1)
{ participantId: 'bruno-1', gameId: 'R16-1',  pick: 'a' }, // Alemanha
{ participantId: 'bruno-1', gameId: 'R16-2',  pick: 'a' }, // França
{ participantId: 'bruno-1', gameId: 'R16-3',  pick: 'b' }, // Canadá
{ participantId: 'bruno-1', gameId: 'R16-4',  pick: 'a' }, // Holanda
{ participantId: 'bruno-1', gameId: 'R16-5',  pick: 'a' }, // Portugal
{ participantId: 'bruno-1', gameId: 'R16-6',  pick: 'a' }, // Espanha
{ participantId: 'bruno-1', gameId: 'R16-7',  pick: 'a' }, // Estados Unidos
{ participantId: 'bruno-1', gameId: 'R16-8',  pick: 'b' }, // Senegal
{ participantId: 'bruno-1', gameId: 'R16-9',  pick: 'a' }, // Brasil
{ participantId: 'bruno-1', gameId: 'R16-10', pick: 'b' }, // Noruega
{ participantId: 'bruno-1', gameId: 'R16-11', pick: 'b' }, // Equador
{ participantId: 'bruno-1', gameId: 'R16-12', pick: 'a' }, // Inglaterra
{ participantId: 'bruno-1', gameId: 'R16-13', pick: 'a' }, // Argentina
{ participantId: 'bruno-1', gameId: 'R16-14', pick: 'b' }, // Egito
{ participantId: 'bruno-1', gameId: 'R16-15', pick: 'b' }, // Argélia
{ participantId: 'bruno-1', gameId: 'R16-16', pick: 'a' }, // Colômbia

{ participantId: 'bruno-1', gameId: 'QF-1', pick: 'b' }, // França
{ participantId: 'bruno-1', gameId: 'QF-2', pick: 'b' }, // Holanda
{ participantId: 'bruno-1', gameId: 'QF-3', pick: 'b' }, // Espanha
{ participantId: 'bruno-1', gameId: 'QF-4', pick: 'b' }, // Bélgica
{ participantId: 'bruno-1', gameId: 'QF-5', pick: 'b' }, // Noruega
{ participantId: 'bruno-1', gameId: 'QF-6', pick: 'b' }, // Inglaterra
{ participantId: 'bruno-1', gameId: 'QF-7', pick: 'a' }, // Argentina
{ participantId: 'bruno-1', gameId: 'QF-8', pick: 'b' }, // Colômbia

{ participantId: 'bruno-1', gameId: 'SF-1', pick: 'a' }, // França
{ participantId: 'bruno-1', gameId: 'SF-2', pick: 'a' }, // Espanha
{ participantId: 'bruno-1', gameId: 'SF-3', pick: 'b' }, // Inglaterra
{ participantId: 'bruno-1', gameId: 'SF-4', pick: 'b' }, // Argentina

{ participantId: 'bruno-1', gameId: 'SEMI-1', pick: 'a' }, // França
{ participantId: 'bruno-1', gameId: 'SEMI-2', pick: 'b' }, // Argentina

{ participantId: 'bruno-1', gameId: 'FINAL', pick: 'a' }, // França campeã

// Enio (enio-1)
{ participantId: 'enio-1', gameId: 'R16-1',  pick: 'a' }, // Alemanha
{ participantId: 'enio-1', gameId: 'R16-2',  pick: 'a' }, // França
{ participantId: 'enio-1', gameId: 'R16-3',  pick: 'b' }, // Canadá
{ participantId: 'enio-1', gameId: 'R16-4',  pick: 'b' }, // Marrocos
{ participantId: 'enio-1', gameId: 'R16-5',  pick: 'a' }, // Portugal
{ participantId: 'enio-1', gameId: 'R16-6',  pick: 'a' }, // Espanha
{ participantId: 'enio-1', gameId: 'R16-7',  pick: 'a' }, // Estados Unidos
{ participantId: 'enio-1', gameId: 'R16-8',  pick: 'b' }, // Senegal
{ participantId: 'enio-1', gameId: 'R16-9',  pick: 'a' }, // Brasil
{ participantId: 'enio-1', gameId: 'R16-10', pick: 'b' }, // Noruega
{ participantId: 'enio-1', gameId: 'R16-11', pick: 'b' }, // Equador
{ participantId: 'enio-1', gameId: 'R16-12', pick: 'a' }, // Inglaterra
{ participantId: 'enio-1', gameId: 'R16-13', pick: 'a' }, // Argentina
{ participantId: 'enio-1', gameId: 'R16-14', pick: 'b' }, // Egito
{ participantId: 'enio-1', gameId: 'R16-15', pick: 'b' }, // Argélia
{ participantId: 'enio-1', gameId: 'R16-16', pick: 'a' }, // Colômbia

{ participantId: 'enio-1', gameId: 'QF-1', pick: 'b' }, // França
{ participantId: 'enio-1', gameId: 'QF-2', pick: 'b' }, // Marrocos
{ participantId: 'enio-1', gameId: 'QF-3', pick: 'a' }, // Portugal
{ participantId: 'enio-1', gameId: 'QF-4', pick: 'b' }, // Senegal
{ participantId: 'enio-1', gameId: 'QF-5', pick: 'b' }, // Noruega
{ participantId: 'enio-1', gameId: 'QF-6', pick: 'b' }, // Inglaterra
{ participantId: 'enio-1', gameId: 'QF-7', pick: 'a' }, // Cabo Verde
{ participantId: 'enio-1', gameId: 'QF-8', pick: 'b' }, // Colômbia

{ participantId: 'enio-1', gameId: 'SF-1', pick: 'a' }, // França
{ participantId: 'enio-1', gameId: 'SF-2', pick: 'a' }, // Portugal
{ participantId: 'enio-1', gameId: 'SF-3', pick: 'a' }, // Brasil
{ participantId: 'enio-1', gameId: 'SF-4', pick: 'b' }, // Colômbia

{ participantId: 'enio-1', gameId: 'SEMI-1', pick: 'b' }, // Portugal
{ participantId: 'enio-1', gameId: 'SEMI-2', pick: 'a' }, // Brasil

{ participantId: 'enio-1', gameId: 'FINAL', pick: 'b' }, // Brasil campeã

// Jocelmo (jocelmo)
{ participantId: 'jocelmo', gameId: 'R16-1',  pick: 'a' }, // Alemanha
{ participantId: 'jocelmo', gameId: 'R16-2',  pick: 'a' }, // França
{ participantId: 'jocelmo', gameId: 'R16-3',  pick: 'b' }, // Canadá
{ participantId: 'jocelmo', gameId: 'R16-4',  pick: 'a' }, // Holanda
{ participantId: 'jocelmo', gameId: 'R16-5',  pick: 'a' }, // Portugal
{ participantId: 'jocelmo', gameId: 'R16-6',  pick: 'a' }, // Espanha
{ participantId: 'jocelmo', gameId: 'R16-7',  pick: 'a' }, // Estados Unidos
{ participantId: 'jocelmo', gameId: 'R16-8',  pick: 'b' }, // Senegal
{ participantId: 'jocelmo', gameId: 'R16-9',  pick: 'a' }, // Brasil
{ participantId: 'jocelmo', gameId: 'R16-10', pick: 'b' }, // Noruega
{ participantId: 'jocelmo', gameId: 'R16-11', pick: 'a' }, // México
{ participantId: 'jocelmo', gameId: 'R16-12', pick: 'a' }, // Inglaterra
{ participantId: 'jocelmo', gameId: 'R16-13', pick: 'a' }, // Argentina
{ participantId: 'jocelmo', gameId: 'R16-14', pick: 'b' }, // Egito
{ participantId: 'jocelmo', gameId: 'R16-15', pick: 'a' }, // Suíça
{ participantId: 'jocelmo', gameId: 'R16-16', pick: 'a' }, // Colômbia

{ participantId: 'jocelmo', gameId: 'QF-1', pick: 'b' }, // França
{ participantId: 'jocelmo', gameId: 'QF-2', pick: 'a' }, // África do Sul
{ participantId: 'jocelmo', gameId: 'QF-3', pick: 'a' }, // Portugal
{ participantId: 'jocelmo', gameId: 'QF-4', pick: 'a' }, // Estados Unidos
{ participantId: 'jocelmo', gameId: 'QF-5', pick: 'b' }, // Noruega
{ participantId: 'jocelmo', gameId: 'QF-6', pick: 'b' }, // Inglaterra
{ participantId: 'jocelmo', gameId: 'QF-7', pick: 'a' }, // Argentina
{ participantId: 'jocelmo', gameId: 'QF-8', pick: 'b' }, // Colômbia

{ participantId: 'jocelmo', gameId: 'SF-1', pick: 'a' }, // França
{ participantId: 'jocelmo', gameId: 'SF-2', pick: 'b' }, // Bélgica
{ participantId: 'jocelmo', gameId: 'SF-3', pick: 'a' }, // Brasil
{ participantId: 'jocelmo', gameId: 'SF-4', pick: 'b' }, // Argentina

{ participantId: 'jocelmo', gameId: 'SEMI-1', pick: 'a' }, // França
{ participantId: 'jocelmo', gameId: 'SEMI-2', pick: 'a' }, // Brasil

{ participantId: 'jocelmo', gameId: 'FINAL', pick: 'b' }, // Brasil campeã

// Diego (diego)
{ participantId: 'diego', gameId: 'R16-1',  pick: 'a' }, // Alemanha
{ participantId: 'diego', gameId: 'R16-2',  pick: 'a' }, // França
{ participantId: 'diego', gameId: 'R16-3',  pick: 'b' }, // Canadá
{ participantId: 'diego', gameId: 'R16-4',  pick: 'a' }, // Holanda
{ participantId: 'diego', gameId: 'R16-5',  pick: 'a' }, // Portugal
{ participantId: 'diego', gameId: 'R16-6',  pick: 'a' }, // Espanha
{ participantId: 'diego', gameId: 'R16-7',  pick: 'a' }, // Estados Unidos
{ participantId: 'diego', gameId: 'R16-8',  pick: 'a' }, // Bélgica
{ participantId: 'diego', gameId: 'R16-9',  pick: 'a' }, // Brasil
{ participantId: 'diego', gameId: 'R16-10', pick: 'b' }, // Noruega
{ participantId: 'diego', gameId: 'R16-11', pick: 'b' }, // Equador
{ participantId: 'diego', gameId: 'R16-12', pick: 'a' }, // Inglaterra
{ participantId: 'diego', gameId: 'R16-13', pick: 'a' }, // Argentina
{ participantId: 'diego', gameId: 'R16-14', pick: 'b' }, // Egito
{ participantId: 'diego', gameId: 'R16-15', pick: 'a' }, // Suíça
{ participantId: 'diego', gameId: 'R16-16', pick: 'a' }, // Colômbia

{ participantId: 'diego', gameId: 'QF-1', pick: 'b' }, // França
{ participantId: 'diego', gameId: 'QF-2', pick: 'b' }, // Marrocos
{ participantId: 'diego', gameId: 'QF-3', pick: 'a' }, // Portugal
{ participantId: 'diego', gameId: 'QF-4', pick: 'a' }, // Estados Unidos
{ participantId: 'diego', gameId: 'QF-5', pick: 'b' }, // Noruega
{ participantId: 'diego', gameId: 'QF-6', pick: 'b' }, // Inglaterra
{ participantId: 'diego', gameId: 'QF-7', pick: 'a' }, // Argentina
{ participantId: 'diego', gameId: 'QF-8', pick: 'b' }, // Colômbia

{ participantId: 'diego', gameId: 'SF-1', pick: 'a' }, // França
{ participantId: 'diego', gameId: 'SF-2', pick: 'a' }, // Espanha
{ participantId: 'diego', gameId: 'SF-3', pick: 'b' }, // Inglaterra
{ participantId: 'diego', gameId: 'SF-4', pick: 'b' }, // Argentina

{ participantId: 'diego', gameId: 'SEMI-1', pick: 'a' }, // França
{ participantId: 'diego', gameId: 'SEMI-2', pick: 'b' }, // Argentina

{ participantId: 'diego', gameId: 'FINAL', pick: 'b' }, // Argentina campeã

// Rosinaldo (rosinaldo)
{ participantId: 'rosinaldo', gameId: 'R16-1',  pick: 'a' }, // Alemanha
{ participantId: 'rosinaldo', gameId: 'R16-2',  pick: 'a' }, // França
{ participantId: 'rosinaldo', gameId: 'R16-3',  pick: 'b' }, // Canadá
{ participantId: 'rosinaldo', gameId: 'R16-4',  pick: 'a' }, // Holanda
{ participantId: 'rosinaldo', gameId: 'R16-5',  pick: 'a' }, // Portugal
{ participantId: 'rosinaldo', gameId: 'R16-6',  pick: 'a' }, // Espanha
{ participantId: 'rosinaldo', gameId: 'R16-7',  pick: 'a' }, // Estados Unidos
{ participantId: 'rosinaldo', gameId: 'R16-8',  pick: 'a' }, // Bélgica
{ participantId: 'rosinaldo', gameId: 'R16-9',  pick: 'a' }, // Brasil
{ participantId: 'rosinaldo', gameId: 'R16-10', pick: 'b' }, // Noruega
{ participantId: 'rosinaldo', gameId: 'R16-11', pick: 'a' }, // México
{ participantId: 'rosinaldo', gameId: 'R16-12', pick: 'a' }, // Inglaterra
{ participantId: 'rosinaldo', gameId: 'R16-13', pick: 'a' }, // Argentina
{ participantId: 'rosinaldo', gameId: 'R16-14', pick: 'b' }, // Egito
{ participantId: 'rosinaldo', gameId: 'R16-15', pick: 'b' }, // Argélia
{ participantId: 'rosinaldo', gameId: 'R16-16', pick: 'a' }, // Colômbia

{ participantId: 'rosinaldo', gameId: 'QF-1', pick: 'b' }, // França
{ participantId: 'rosinaldo', gameId: 'QF-2', pick: 'b' }, // Holanda
{ participantId: 'rosinaldo', gameId: 'QF-3', pick: 'a' }, // Portugal
{ participantId: 'rosinaldo', gameId: 'QF-4', pick: 'a' }, // Estados Unidos
{ participantId: 'rosinaldo', gameId: 'QF-5', pick: 'b' }, // Noruega
{ participantId: 'rosinaldo', gameId: 'QF-6', pick: 'b' }, // Inglaterra
{ participantId: 'rosinaldo', gameId: 'QF-7', pick: 'a' }, // Argentina
{ participantId: 'rosinaldo', gameId: 'QF-8', pick: 'a' }, // Argélia

{ participantId: 'rosinaldo', gameId: 'SF-1', pick: 'a' }, // França
{ participantId: 'rosinaldo', gameId: 'SF-2', pick: 'a' }, // Portugal
{ participantId: 'rosinaldo', gameId: 'SF-3', pick: 'a' }, // Brasil
{ participantId: 'rosinaldo', gameId: 'SF-4', pick: 'b' }, // Colômbia

{ participantId: 'rosinaldo', gameId: 'SEMI-1', pick: 'a' }, // França
{ participantId: 'rosinaldo', gameId: 'SEMI-2', pick: 'a' }, // Brasil

{ participantId: 'rosinaldo', gameId: 'FINAL', pick: 'b' }, // Brasil campeã

// Jorge Fernandes (jorge-fernandes)
{ participantId: 'jorge-fernandes', gameId: 'R16-1',  pick: 'b' }, // Paraguai
{ participantId: 'jorge-fernandes', gameId: 'R16-2',  pick: 'a' }, // França
{ participantId: 'jorge-fernandes', gameId: 'R16-3',  pick: 'b' }, // Canadá
{ participantId: 'jorge-fernandes', gameId: 'R16-4',  pick: 'a' }, // Holanda
{ participantId: 'jorge-fernandes', gameId: 'R16-5',  pick: 'b' }, // Croácia
{ participantId: 'jorge-fernandes', gameId: 'R16-6',  pick: 'a' }, // Espanha
{ participantId: 'jorge-fernandes', gameId: 'R16-7',  pick: 'a' }, // Estados Unidos
{ participantId: 'jorge-fernandes', gameId: 'R16-8',  pick: 'a' }, // Bélgica
{ participantId: 'jorge-fernandes', gameId: 'R16-9',  pick: 'a' }, // Brasil
{ participantId: 'jorge-fernandes', gameId: 'R16-10', pick: 'b' }, // Noruega
{ participantId: 'jorge-fernandes', gameId: 'R16-11', pick: 'a' }, // México
{ participantId: 'jorge-fernandes', gameId: 'R16-12', pick: 'a' }, // Inglaterra
{ participantId: 'jorge-fernandes', gameId: 'R16-13', pick: 'a' }, // Argentina
{ participantId: 'jorge-fernandes', gameId: 'R16-14', pick: 'a' }, // Austrália
{ participantId: 'jorge-fernandes', gameId: 'R16-15', pick: 'a' }, // Suíça
{ participantId: 'jorge-fernandes', gameId: 'R16-16', pick: 'a' }, // Colômbia

{ participantId: 'jorge-fernandes', gameId: 'QF-1', pick: 'b' }, // França
{ participantId: 'jorge-fernandes', gameId: 'QF-2', pick: 'b' }, // Marrocos
{ participantId: 'jorge-fernandes', gameId: 'QF-3', pick: 'b' }, // Espanha
{ participantId: 'jorge-fernandes', gameId: 'QF-4', pick: 'a' }, // Estados Unidos
{ participantId: 'jorge-fernandes', gameId: 'QF-5', pick: 'b' }, // Noruega
{ participantId: 'jorge-fernandes', gameId: 'QF-6', pick: 'b' }, // Inglaterra
{ participantId: 'jorge-fernandes', gameId: 'QF-7', pick: 'a' }, // Argentina
{ participantId: 'jorge-fernandes', gameId: 'QF-8', pick: 'a' }, // Suíça

{ participantId: 'jorge-fernandes', gameId: 'SF-1', pick: 'a' }, // França
{ participantId: 'jorge-fernandes', gameId: 'SF-2', pick: 'a' }, // Espanha
{ participantId: 'jorge-fernandes', gameId: 'SF-3', pick: 'a' }, // Brasil
{ participantId: 'jorge-fernandes', gameId: 'SF-4', pick: 'b' }, // Argentina

{ participantId: 'jorge-fernandes', gameId: 'SEMI-1', pick: 'a' }, // França
{ participantId: 'jorge-fernandes', gameId: 'SEMI-2', pick: 'a' }, // Brasil

{ participantId: 'jorge-fernandes', gameId: 'FINAL', pick: 'b' }, // Brasil campeã

];
