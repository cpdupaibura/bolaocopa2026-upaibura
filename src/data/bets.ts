import { Bet, BetOutcome, ParticipantBet } from '../lib/types';

/**
 * APOSTAS DO BOLÃO — COMO PREENCHER
 * ==================================
 *
 * Cada participante tem seu próprio objeto abaixo.
 * A chave é o ID do jogo (ex: 'C1'), o valor é a aposta.
 *
 * Aposta SIMPLES (1 ponto se acertar o resultado):
 *   s('home')  → vitória do time da casa (1º da lista)
 *   s('away')  → vitória do time visitante (2º da lista)
 *   s('draw')  → empate
 *
 * Aposta AVANÇADA (3 pontos se acertar o PLACAR EXATO, 0 se errar):
 *   a(2, 0)    → time da casa 2 × 0 time visitante
 *   a(1, 1)    → empate 1 × 1
 *
 * Pode misturar simples e avançada livremente por jogo.
 * Não é obrigatório apostar em todos os jogos.
 *
 * IDs dos jogos (casa × visitante):
 * ────────────────────────────────────────────────────────────────
 *  A1 México × África do Sul      A2 Coreia do Sul × Rep. Tcheca
 *  A3 Rep. Tcheca × África do Sul A4 México × Coreia do Sul
 *  A5 Rep. Tcheca × México        A6 África do Sul × Coreia do Sul
 *
 *  B1 Canadá × Bósnia             B2 Catar × Suíça
 *  B3 Suíça × Bósnia              B4 Canadá × Catar
 *  B5 Suíça × Canadá              B6 Bósnia × Catar
 *
 *  C1 Brasil × Marrocos           C2 Haiti × Escócia
 *  C3 Escócia × Marrocos          C4 Brasil × Haiti
 *  C5 Marrocos × Haiti            C6 Escócia × Brasil
 *
 *  D1 EUA × Paraguai              D2 Austrália × Turquia
 *  D3 Turquia × Paraguai          D4 EUA × Austrália
 *  D5 Turquia × EUA               D6 Paraguai × Austrália
 *
 *  E1 Alemanha × Curaçao          E2 C. Marfim × Equador
 *  E3 Alemanha × C. Marfim        E4 Equador × Curaçao
 *  E5 Equador × Alemanha          E6 Curaçao × C. Marfim
 *
 *  F1 Holanda × Japão             F2 Suécia × Tunísia
 *  F3 Tunísia × Japão             F4 Holanda × Suécia
 *  F5 Tunísia × Holanda           F6 Japão × Suécia
 *
 *  G1 Bélgica × Egito             G2 Irã × Nova Zelândia
 *  G3 Bélgica × Irã               G4 Nova Zelândia × Egito
 *  G5 Nova Zelândia × Bélgica     G6 Egito × Irã
 *
 *  H1 Espanha × Cabo Verde        H2 Arábia Saudita × Uruguai
 *  H3 Espanha × Arábia Saudita    H4 Uruguai × Cabo Verde
 *  H5 Uruguai × Espanha           H6 Cabo Verde × Arábia Saudita
 *
 *  I1 França × Senegal            I2 Iraque × Noruega
 *  I3 França × Iraque             I4 Noruega × Senegal
 *  I5 Noruega × França            I6 Senegal × Iraque
 *
 *  J1 Argentina × Argélia         J2 Áustria × Jordânia
 *  J3 Argentina × Áustria         J4 Jordânia × Argélia
 *  J5 Jordânia × Argentina        J6 Argélia × Áustria
 *
 *  K1 Portugal × Congo            K2 Uzbequistão × Colômbia
 *  K3 Portugal × Uzbequistão      K4 Colômbia × Congo
 *  K5 Colômbia × Portugal         K6 Congo × Uzbequistão
 *
 *  L1 Inglaterra × Croácia        L2 Gana × Panamá
 *  L3 Inglaterra × Gana           L4 Panamá × Croácia
 *  L5 Panamá × Inglaterra         L6 Croácia × Gana
 */

type PlayerBets = Record<string, Bet>;
function s(outcome: BetOutcome): Bet { return { type: 'simple', outcome }; }
function a(homeScore: number, awayScore: number): Bet { return { type: 'advanced', homeScore, awayScore }; }

// ════════════════════════════════════════════════════════════
// EDUARDO ALEX
// ════════════════════════════════════════════════════════════
const eduardoAlexBets: PlayerBets = {
  // Cole aqui as apostas do Eduardo Alex
  // Exemplo: 'C1': s('home'),   // Simples: vitória do Brasil
  //          'J1': a(2, 0),     // Avançada: Argentina 2 × 0 Argélia
};

// ════════════════════════════════════════════════════════════
// JOÃO PAULO
// ════════════════════════════════════════════════════════════
const joaoPauloBets: PlayerBets = {
  // Cole aqui as apostas do João Paulo
};

// ════════════════════════════════════════════════════════════
// KAMILLA RAVENNA
// ════════════════════════════════════════════════════════════
const kamillaBets: PlayerBets = {
  // Cole aqui as apostas da Kamilla Ravenna
};

// ════════════════════════════════════════════════════════════
// ENIO BATALHA — Aposta 1
// ════════════════════════════════════════════════════════════
const enio1Bets: PlayerBets = {
  // Cole aqui as apostas do Enio (ficha 1)
};

// ════════════════════════════════════════════════════════════
// ENIO BATALHA — Aposta 2
// ════════════════════════════════════════════════════════════
const enio2Bets: PlayerBets = {
  // Cole aqui as apostas do Enio (ficha 2)
};

// ════════════════════════════════════════════════════════════
// BRUNO THOMAZ — Aposta 1
// ════════════════════════════════════════════════════════════
const bruno1Bets: PlayerBets = {
  // Cole aqui as apostas do Bruno (ficha 1)
};

// ════════════════════════════════════════════════════════════
// BRUNO THOMAZ — Aposta 2
// ════════════════════════════════════════════════════════════
const bruno2Bets: PlayerBets = {
  // Cole aqui as apostas do Bruno (ficha 2)
};

// ════════════════════════════════════════════════════════════
// JOCELMO FIGUEREDO
// ════════════════════════════════════════════════════════════
const jocelmorBets: PlayerBets = {
  // Cole aqui as apostas do Jocelmo Figueredo
};

// ════════════════════════════════════════════════════════════
// JORGINHO
// ════════════════════════════════════════════════════════════
const jorginhoBets: PlayerBets = {
  // Cole aqui as apostas do Jorginho
};

// ════════════════════════════════════════════════════════════
// DIEGO RODRIGO
// ════════════════════════════════════════════════════════════
const diegoBets: PlayerBets = {
  // Cole aqui as apostas do Diego Rodrigo
};

// ════════════════════════════════════════════════════════════
// NETINHO
// ════════════════════════════════════════════════════════════
const netinhoBets: PlayerBets = {
  // Cole aqui as apostas do Netinho
};

// ════════════════════════════════════════════════════════════
// REBECA MONTENEGRO
// ════════════════════════════════════════════════════════════
const rebecaBets: PlayerBets = {
  // Cole aqui as apostas da Rebeca Montenegro
};

// ════════════════════════════════════════════════════════════
// CLEBER LEAL
// ════════════════════════════════════════════════════════════
const cleberBets: PlayerBets = {
  // Cole aqui as apostas do Cleber Leal
};

// ════════════════════════════════════════════════════════════
// JORGE ENFERMAGEM
// ════════════════════════════════════════════════════════════
const jorgeEnfBets: PlayerBets = {
  // Cole aqui as apostas do Jorge Enfermagem
};

// ════════════════════════════════════════════════════════════
// GRAÇA
// ════════════════════════════════════════════════════════════
const gracaBets: PlayerBets = {
  // Cole aqui as apostas da Graça
};

// ─── Conversão para formato interno (não editar abaixo) ──────────────
function expand(participantId: string, bets: PlayerBets): ParticipantBet[] {
  return Object.entries(bets).map(([gameId, bet]) => ({ participantId, gameId, bet }));
}

export const BETS: ParticipantBet[] = [
  ...expand('eduardo-alex',  eduardoAlexBets),
  ...expand('joao-paulo',    joaoPauloBets),
  ...expand('kamilla',       kamillaBets),
  ...expand('enio-1',        enio1Bets),
  ...expand('enio-2',        enio2Bets),
  ...expand('bruno-1',       bruno1Bets),
  ...expand('bruno-2',       bruno2Bets),
  ...expand('jocelmo',       jocelmorBets),
  ...expand('jorginho',      jorginhoBets),
  ...expand('diego',         diegoBets),
  ...expand('netinho',       netinhoBets),
  ...expand('rebeca',        rebecaBets),
  ...expand('cleber',        cleberBets),
  ...expand('jorge-enf',     jorgeEnfBets),
  ...expand('graca',         gracaBets),
];
