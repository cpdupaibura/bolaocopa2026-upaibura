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
// BRUNO THOMAZ — Aposta 1
// Scanned landscape. Data: 04/06/26. Setor: CPD.
// All X marks = all simples bets.
// ════════════════════════════════════════════════════════════
const bruno1Bets: PlayerBets = {
  // GRUPO A
  A1: s('home'),
  A2: s('draw'),
  A3: s('home'),
  A4: s('home'),
  A5: s('draw'),
  A6: s('away'),

  // GRUPO B
  B1: s('home'),
  B2: s('away'),
  B3: s('home'),
  B4: s('home'),
  B5: s('draw'),
  B6: s('home'),

  // GRUPO C
  C1: s('draw'),
  C2: s('away'),
  C3: s('draw'),
  C4: s('home'),
  C5: s('away'),
  C6: s('home'),

  // GRUPO D
  D1: s('home'),
  D2: s('away'),
  D3: s('draw'),
  D4: s('home'),
  D5: s('draw'),
  D6: s('home'),

  // GRUPO E
  E1: s('home'),
  E2: s('away'),
  E3: s('home'),
  E4: s('home'),
  E5: s('away'),
  E6: s('away'),

  // GRUPO F
  F1: s('home'),
  F2: s('home'),
  F3: s('away'),
  F4: s('home'),
  F5: s('draw'),
  F6: s('away'),

  // GRUPO G
  G1: s('home'),
  G2: s('draw'),
  G3: s('home'),
  G4: s('away'),
  G5: s('draw'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: s('away'),
  H3: s('home'),
  H4: s('home'),
  H5: s('away'),
  H6: s('away'),

  // GRUPO I
  I1: s('home'),
  I2: s('away'),
  I3: s('home'),
  I4: s('draw'),
  I5: s('away'),
  I6: s('home'),

  // GRUPO J
  J1: s('home'),
  J2: s('home'),
  J3: s('home'),
  J4: s('away'),
  J5: s('away'),
  J6: s('away'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('away'),
  K6: s('draw'),

  // GRUPO L
  L1: s('home'),
  L2: s('home'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('draw'),
};

// ════════════════════════════════════════════════════════════
// BRUNO THOMAZ — Aposta 2
// Scanned landscape. Data: 04/06/26. Setor: CPD.
// Has numbers = avançada bets.
// ════════════════════════════════════════════════════════════
const bruno2Bets: PlayerBets = {
  // GRUPO A
  A1: a(2, 0),
  A2: a(1, 1),
  A3: a(2, 0),
  A4: a(2, 1),
  A5: a(1, 1),
  A6: a(1, 2),

  // GRUPO B
  B1: a(2, 1),
  B2: a(0, 2),
  B3: a(1, 0),
  B4: a(2, 0),
  B5: a(1, 1),
  B6: a(2, 0),

  // GRUPO C
  C1: a(1, 2),
  C2: a(0, 2),
  C3: a(1, 1),
  C4: a(3, 0),
  C5: a(0, 2),
  C6: a(2, 0),

  // GRUPO D
  D1: a(2, 1),
  D2: a(1, 2),
  D3: a(2, 1),
  D4: a(2, 0),
  D5: a(1, 1),
  D6: a(2, 1),

  // GRUPO E
  E1: a(3, 0),
  E2: a(1, 2),
  E3: a(2, 1),
  E4: a(2, 0),
  E5: a(1, 2),
  E6: a(1, 2),

  // GRUPO F
  F1: a(2, 1),
  F2: a(1, 1),
  F3: a(0, 2),
  F4: a(2, 0),
  F5: a(1, 1),
  F6: a(1, 2),

  // GRUPO G
  G1: a(2, 1),
  G2: a(0, 0),
  G3: a(2, 0),
  G4: a(1, 2),
  G5: a(1, 1),
  G6: a(0, 3),

  // GRUPO H
  H1: a(3, 0),
  H2: a(0, 2),
  H3: a(2, 0),
  H4: a(2, 0),
  H5: a(0, 1),
  H6: a(1, 2),

  // GRUPO I
  I1: a(2, 1),
  I2: a(0, 2),
  I3: a(3, 0),
  I4: a(1, 1),
  I5: a(1, 2),
  I6: a(2, 0),

  // GRUPO J
  J1: a(3, 1),
  J2: a(2, 0),
  J3: a(2, 1),
  J4: a(0, 2),
  J5: a(1, 2),
  J6: a(0, 4),

  // GRUPO K
  K1: a(3, 0),
  K2: a(0, 2),
  K3: a(3, 0),
  K4: a(3, 0),
  K5: a(1, 2),
  K6: a(0, 0),

  // GRUPO L
  L1: a(2, 1),
  L2: a(2, 1),
  L3: a(3, 0),
  L4: a(1, 2),
  L5: a(0, 3),
  L6: a(2, 1),
};

// ════════════════════════════════════════════════════════════
// CLEBER (MANUTENÇÃO)
// Scanned landscape. Data: 20/06/2026. All X marks.
// ════════════════════════════════════════════════════════════
const cleberBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),
  A2: s('draw'),
  A3: s('draw'),
  A4: s('home'),
  A5: s('draw'),
  A6: s('away'),

  // GRUPO B
  B1: s('away'),
  B2: s('draw'),
  B3: s('home'),
  B4: s('home'),
  B5: s('draw'),
  B6: s('home'),

  // GRUPO C
  C1: a(3, 0),
  C2: s('away'),
  C3: s('away'),
  C4: a(5, 1),
  C5: a(0, 2),
  C6: a(3, 1),

  // GRUPO D
  D1: s('draw'),
  D2: s('away'),
  D3: s('draw'),
  D4: s('home'),
  D5: s('home'),
  D6: s('home'),

  // GRUPO E
  E1: s('home'),
  E2: s('away'),
  E3: s('home'),
  E4: s('home'),
  E5: s('draw'),
  E6: s('away'),

  // GRUPO F
  F1: s('away'),
  F2: s('home'),
  F3: s('away'),
  F4: s('draw'),
  F5: s('home'),
  F6: s('away'),

  // GRUPO G
  G1: s('home'),
  G2: s('away'),
  G3: s('home'),
  G4: s('draw'),
  G5: s('draw'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: s('away'),
  H3: s('home'),
  H4: s('home'),
  H5: s('draw'),
  H6: s('away'),

  // GRUPO I
  I1: s('home'),
  I2: s('away'),
  I3: s('home'),
  I4: s('away'),
  I5: s('away'),
  I6: s('home'),

  // GRUPO J
  J1: s('home'),
  J2: s('home'),
  J3: s('home'),
  J4: s('draw'),
  J5: s('away'),
  J6: s('away'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('away'),
  K6: s('draw'),

  // GRUPO L
  L1: s('home'),
  L2: s('draw'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('home'),
};

// ════════════════════════════════════════════════════════════
// DIEGO RODRIGO (ADM)
// Scanned landscape. Data: 08/06/2026.
// Mostly X marks, some numbers.
// ════════════════════════════════════════════════════════════
const diegoBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),
  A2: s('home'),
  A3: s('home'),
  A4: s('draw'),
  A5: s('away'),
  A6: s('away'),

  // GRUPO B
  B1: s('away'),
  B2: s('away'),
  B3: s('draw'),
  B4: s('home'),
  B5: s('home'),
  B6: s('home'),

  // GRUPO C
  C1: s('draw'),
  C2: s('away'),
  C3: s('away'),
  C4: s('home'),
  C5: s('away'),
  C6: s('home'),

  // GRUPO D
  D1: s('home'),
  D2: s('away'),
  D3: s('home'),
  D4: s('draw'),
  D5: s('home'),
  D6: s('away'),

  // GRUPO E
  E1: s('home'),
  E2: s('draw'),
  E3: s('home'),
  E4: s('home'),
  E5: s('draw'),
  E6: s('away'),

  // GRUPO F
  F1: s('draw'),
  F2: s('home'),
  F3: s('away'),
  F4: s('home'),
  F5: s('home'),
  F6: s('away'),

  // GRUPO G
  G1: s('draw'),
  G2: s('away'),
  G3: s('home'),
  G4: s('away'),
  G5: s('draw'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: s('away'),
  H3: s('home'),
  H4: s('home'),
  H5: s('away'),
  H6: s('away'),

  // GRUPO I
  I1: s('home'),
  I2: s('away'),
  I3: s('home'),
  I4: s('home'),
  I5: s('away'),
  I6: s('home'),

  // GRUPO J
  J1: s('home'),
  J2: s('home'),
  J3: s('home'),
  J4: s('draw'),
  J5: s('away'),
  J6: s('away'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('draw'),
  K6: s('draw'),

  // GRUPO L
  L1: s('home'),
  L2: s('home'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('draw'),
};

// ════════════════════════════════════════════════════════════
// EDUARDO ALEX
// Forma horizontal (foto). Data: 10/06/26
// Grupos A-F na esquerda, G-L na direita.
// ════════════════════════════════════════════════════════════
const eduardoAlexBets: PlayerBets = {
  A1: a(2, 0), A2: a(1, 1), A3: s('home'), A4: s('draw'), A5: s('away'), A6: s('away'),
  B1: s('home'), B2: s('away'), B3: a(2, 0), B4: s('home'), B5: s('draw'), B6: s('home'),
  C1: a(2, 1), C2: s('away'), C3: s('away'), C4: s('home'), C5: s('away'), C6: s('home'),
  D1: s('home'), D2: s('away'), D3: s('home'), D4: s('home'), D5: s('draw'), D6: s('home'),
  E1: s('home'), E2: a(1, 1), E3: s('home'), E4: s('home'), E5: s('draw'), E6: s('away'),
  F1: s('away'), F2: s('draw'), F3: a(0, 2), F4: s('home'), F5: s('home'), F6: s('away'),
  G1: a(2, 0), G2: s('home'), G3: s('home'), G4: s('away'), G5: s('draw'), G6: s('away'),
  H1: s('home'), H2: s('draw'), H3: s('home'), H4: a(2, 0), H5: s('away'), H6: s('away'),
  I1: s('home'), I2: s('away'), I3: s('home'), I4: s('draw'), I5: a(1, 1), I6: s('home'),
  J1: s('home'), J2: s('home'), J3: a(2, 1), J4: s('away'), J5: s('away'), J6: s('away'),
  K1: s('home'), K2: s('away'), K3: s('home'), K4: s('home'), K5: a(1, 1), K6: s('home'),
  L1: s('draw'), L2: s('home'), L3: s('home'), L4: s('away'), L5: s('away'), L6: a(2, 1),
};

// ════════════════════════════════════════════════════════════
// ENIO BATALHA — Aposta 1
// Scanned landscape. Data: 10/06/26. Setor: CPD.
// Bottom half = Groups A-F, Top half = Groups G-L.
// All ADVANCED bets (numbers written in boxes).
// ════════════════════════════════════════════════════════════
const enio1Bets: PlayerBets = {
  // GRUPO A
  A1: a(2, 1),
  A2: a(1, 1),
  A3: a(2, 1),
  A4: a(1, 1),
  A5: a(1, 2),
  A6: a(0, 1),

  // GRUPO B
  B1: a(2, 1),
  B2: a(0, 2),
  B3: a(2, 1),
  B4: a(2, 0),
  B5: a(2, 1),
  B6: a(2, 0),

  // GRUPO C
  C1: a(2, 1),
  C2: a(0, 2),
  C3: a(1, 2),
  C4: a(3, 0),
  C5: a(0, 2),
  C6: a(2, 0),

  // GRUPO D
  D1: a(2, 1),
  D2: a(1, 2),
  D3: a(2, 1),
  D4: a(1, 1),
  D5: a(1, 1),
  D6: a(1, 1),

  // GRUPO E
  E1: a(3, 0),
  E2: a(1, 1),
  E3: a(2, 1),
  E4: a(2, 0),
  E5: a(1, 1),
  E6: a(0, 1),

  // GRUPO F
  F1: a(2, 1),
  F2: a(2, 1),
  F3: a(0, 2),
  F4: a(3, 0),
  F5: a(1, 1),
  F6: a(0, 2),

  // GRUPO G
  G1: a(2, 1),
  G2: a(2, 0),
  G3: a(2, 0),
  G4: a(0, 2),
  G5: a(1, 1),
  G6: a(0, 3),

  // GRUPO H
  H1: a(4, 0),
  H2: a(0, 2),
  H3: a(3, 0),
  H4: a(2, 0),
  H5: a(1, 1),
  H6: a(1, 2),

  // GRUPO I
  I1: a(2, 1),
  I2: a(0, 2),
  I3: a(3, 0),
  I4: a(1, 1),
  I5: a(1, 2),
  I6: a(3, 0),

  // GRUPO J
  J1: a(3, 0),
  J2: a(2, 0),
  J3: a(2, 0),
  J4: a(1, 2),
  J5: a(1, 1),
  J6: a(0, 3),

  // GRUPO K
  K1: a(2, 0),
  K2: a(1, 2),
  K3: a(2, 1),
  K4: a(2, 1),
  K5: a(1, 1),
  K6: a(2, 1),

  // GRUPO L
  L1: a(2, 1),
  L2: a(1, 1),
  L3: a(3, 0),
  L4: a(0, 2),
  L5: a(0, 2),
  L6: a(2, 1),
};

// ════════════════════════════════════════════════════════════
// ENIO BATALHA — Aposta 2
// Scanned landscape. Data: 08/06/2026. Setor: CPD.
// All X marks = all simples bets.
// ════════════════════════════════════════════════════════════
const enio2Bets: PlayerBets = {
  // GRUPO A
  A1: s('home'),
  A2: s('draw'),
  A3: s('home'),
  A4: s('draw'),
  A5: s('draw'),
  A6: s('away'),

  // GRUPO B
  B1: s('away'),
  B2: s('away'),
  B3: s('home'),
  B4: s('home'),
  B5: s('home'),
  B6: s('home'),

  // GRUPO C
  C1: s('home'),
  C2: s('away'),
  C3: s('away'),
  C4: s('home'),
  C5: s('away'),
  C6: s('home'),

  // GRUPO D
  D1: s('home'),
  D2: s('away'),
  D3: s('draw'),
  D4: s('home'),
  D5: s('draw'),
  D6: s('home'),

  // GRUPO E
  E1: s('home'),
  E2: s('draw'),
  E3: s('home'),
  E4: s('home'),
  E5: s('away'),
  E6: s('away'),

  // GRUPO F
  F1: s('home'),
  F2: s('home'),
  F3: s('away'),
  F4: s('home'),
  F5: s('draw'),
  F6: s('away'),

  // GRUPO G
  G1: s('home'),
  G2: s('home'),
  G3: s('draw'),
  G4: s('draw'),
  G5: s('draw'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: s('away'),
  H3: s('home'),
  H4: s('home'),
  H5: s('away'),
  H6: s('away'),

  // GRUPO I
  I1: s('home'),
  I2: s('away'),
  I3: s('home'),
  I4: s('home'),
  I5: s('draw'),
  I6: s('home'),

  // GRUPO J
  J1: s('home'),
  J2: s('home'),
  J3: s('draw'),
  J4: s('away'),
  J5: s('draw'),
  J6: s('away'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('away'),
  K6: s('draw'),

  // GRUPO L
  L1: s('draw'),
  L2: s('home'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('home'),
};

// ════════════════════════════════════════════════════════════
// GRAÇA SANTOS (ADM)
// Scanned landscape. Data: 10/06/26.
// ALL NUMBERS = all avançada bets.
// ════════════════════════════════════════════════════════════
const gracaBets: PlayerBets = {
  // GRUPO A
  A1: a(2, 0),
  A2: a(1, 1),
  A3: a(1, 2),
  A4: a(2, 0),
  A5: a(1, 2),
  A6: a(0, 1),

  // GRUPO B
  B1: a(2, 1),
  B2: a(3, 0),
  B3: a(2, 1),
  B4: a(1, 0),
  B5: a(1, 2),
  B6: a(1, 1),

  // GRUPO C
  C1: a(3, 0),
  C2: a(1, 1),
  C3: a(0, 2),
  C4: a(3, 0),
  C5: a(0, 2),
  C6: a(2, 0),

  // GRUPO D
  D1: a(2, 0),
  D2: a(1, 1),
  D3: a(0, 1),
  D4: a(3, 1),
  D5: a(1, 2),
  D6: a(2, 1),

  // GRUPO E
  E1: a(4, 0),
  E2: a(1, 2),
  E3: a(3, 0),
  E4: a(2, 1),
  E5: a(1, 3),
  E6: a(0, 2),

  // GRUPO F
  F1: a(3, 1),
  F2: a(2, 0),
  F3: a(0, 2),
  F4: a(2, 1),
  F5: a(1, 2),
  F6: a(1, 2),

  // GRUPO G
  G1: a(2, 0),
  G2: a(3, 1),
  G3: a(2, 1),
  G4: a(1, 2),
  G5: a(1, 1),
  G6: a(1, 3),

  // GRUPO H
  H1: a(3, 0),
  H2: a(1, 2),
  H3: a(2, 0),
  H4: a(3, 0),
  H5: a(0, 1),
  H6: a(1, 2),

  // GRUPO I
  I1: a(2, 1),
  I2: a(0, 2),
  I3: a(3, 0),
  I4: a(1, 1),
  I5: a(1, 3),
  I6: a(2, 0),

  // GRUPO J
  J1: a(2, 0),
  J2: a(2, 1),
  J3: a(2, 1),
  J4: a(1, 2),
  J5: a(1, 1),
  J6: a(0, 3),

  // GRUPO K
  K1: a(3, 0),
  K2: a(1, 2),
  K3: a(2, 0),
  K4: a(3, 1),
  K5: a(1, 2),
  K6: a(1, 1),

  // GRUPO L
  L1: a(2, 1),
  L2: a(2, 0),
  L3: a(3, 1),
  L4: a(1, 2),
  L5: a(0, 3),
  L6: a(1, 1),
};

// ════════════════════════════════════════════════════════════
// IGOR RAFAEL (CPD)
// Scanned landscape. Data: 09/06/26.
// All X marks = all simples bets.
// ════════════════════════════════════════════════════════════
const igorBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),
  A2: s('draw'),
  A3: s('home'),
  A4: s('away'),
  A5: s('draw'),
  A6: s('away'),

  // GRUPO B
  B1: s('home'),
  B2: s('away'),
  B3: s('draw'),
  B4: s('home'),
  B5: s('away'),
  B6: s('home'),

  // GRUPO C
  C1: s('draw'),
  C2: s('away'),
  C3: s('away'),
  C4: s('home'),
  C5: a(1, 3),
  C6: a(4, 0),

  // GRUPO D
  D1: s('away'),
  D2: s('away'),
  D3: s('draw'),
  D4: s('home'),
  D5: a(2, 1),
  D6: s('home'),

  // GRUPO E
  E1: s('home'),
  E2: s('away'),
  E3: s('home'),
  E4: a(2, 0),
  E5: a(2, 3),
  E6: s('away'),

  // GRUPO F
  F1: a(3, 1),
  F2: s('home'),
  F3: s('away'),
  F4: s('home'),
  F5: a(2, 2),
  F6: s('away'),

  // GRUPO G
  G1: a(2, 1),
  G2: s('home'),
  G3: s('home'),
  G4: s('away'),
  G5: s('draw'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: s('away'),
  H3: s('home'),
  H4: s('home'),
  H5: s('away'),
  H6: a(1, 3),

  // GRUPO I
  I1: s('home'),
  I2: s('away'),
  I3: s('home'),
  I4: s('home'),
  I5: s('away'),
  I6: s('home'),

  // GRUPO J
  J1: s('draw'),
  J2: s('home'),
  J3: s('home'),
  J4: s('away'),
  J5: a(1, 0),
  J6: s('away'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('away'),
  K6: s('draw'),

  // GRUPO L
  L1: a(2, 3),
  L2: s('home'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('home'),
};

// ════════════════════════════════════════════════════════════
// IONALDO LINS (MANUTENÇÃO)
// Scanned landscape. Data: 20/06/2026. All X marks.
// ════════════════════════════════════════════════════════════
const ionaldoBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),
  A2: s('draw'),
  A3: s('home'),
  A4: s('home'),
  A5: s('draw'),
  A6: s('away'),

  // GRUPO B
  B1: s('away'),
  B2: s('away'),
  B3: s('home'),
  B4: s('home'),
  B5: s('home'),
  B6: s('home'),

  // GRUPO C
  C1: s('home'),
  C2: s('away'),
  C3: s('draw'),
  C4: s('home'),
  C5: s('away'),
  C6: s('home'),

  // GRUPO D
  D1: s('draw'),
  D2: s('draw'),
  D3: s('away'),
  D4: s('home'),
  D5: s('away'),
  D6: s('home'),

  // GRUPO E
  E1: s('home'),
  E2: s('draw'),
  E3: s('home'),
  E4: s('home'),
  E5: s('draw'),
  E6: s('away'),

  // GRUPO F
  F1: s('away'),
  F2: s('draw'),
  F3: s('draw'),
  F4: s('home'),
  F5: s('home'),
  F6: s('away'),

  // GRUPO G
  G1: s('home'),
  G2: s('home'),
  G3: s('home'),
  G4: s('away'),
  G5: s('home'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: s('away'),
  H3: s('home'),
  H4: s('home'),
  H5: s('draw'),
  H6: s('away'),

  // GRUPO I
  I1: s('draw'),
  I2: s('home'),
  I3: s('draw'),
  I4: s('away'),
  I5: s('away'),
  I6: s('away'),
};

// ════════════════════════════════════════════════════════════
// JOÃO PAULO (MANUTENÇÃO)
// Scanned landscape. Data: 03/06/26. Mix of X and numbers.
// ════════════════════════════════════════════════════════════
const joaoPaulo1Bets: PlayerBets = {
  // GRUPO A
  A1: a(2, 1),
  A2: s('home'),
  A3: s('draw'),
  A4: s('home'),
  A5: s('away'),
  A6: s('draw'),

  // GRUPO B
  B1: s('away'),
  B2: s('away'),
  B3: s('home'),
  B4: s('home'),
  B5: s('draw'),
  B6: s('home'),

  // GRUPO C
  C1: a(2, 0),
  C2: s('away'),
  C3: s('away'),
  C4: a(5, 0),
  C5: a(1, 2),
  C6: a(3, 0),

  // GRUPO D
  D1: s('draw'),
  D2: s('home'),
  D3: s('away'),
  D4: s('home'),
  D5: s('draw'),
  D6: s('home'),

  // GRUPO E
  E1: s('home'),
  E2: s('away'),
  E3: s('home'),
  E4: s('home'),
  E5: s('draw'),
  E6: s('draw'),

  // GRUPO F
  F1: s('draw'),
  F2: s('home'),
  F3: s('away'),
  F4: s('home'),
  F5: s('home'),
  F6: s('away'),

  // GRUPO G
  G1: s('home'),
  G2: s('draw'),
  G3: s('home'),
  G4: s('draw'),
  G5: s('draw'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: s('draw'),
  H3: s('home'),
  H4: s('home'),
  H5: s('draw'),
  H6: s('draw'),

  // GRUPO I
  I1: s('home'),
  I2: s('draw'),
  I3: s('home'),
  I4: s('away'),
  I5: s('away'),
  I6: s('draw'),

  // GRUPO J
  J1: s('home'),
  J2: s('draw'),
  J3: s('home'),
  J4: s('draw'),
  J5: s('draw'),
  J6: s('away'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('draw'),
  K4: s('draw'),
  K5: s('draw'),
  K6: s('draw'),

  // GRUPO L
  L1: s('home'),
  L2: s('draw'),
  L3: s('home'),
  L4: s('draw'),
  L5: s('away'),
  L6: s('home'),
};

const joaoPaulo2Bets: PlayerBets = {
  // GRUPO A
  A1: a(2, 0),
  A2: a(2, 1),
  A3: a(2, 1),
  A4: a(3, 1),
  A5: a(1, 2),
  A6: a(2, 2),

  // GRUPO B
  B1: a(2, 1),
  B2: a(1, 1),
  B3: a(3, 1),
  B4: a(0, 1),
  B5: a(2, 1),
  B6: a(2, 0),

  // GRUPO C
  C1: a(2, 0),
  C2: a(2, 1),
  C3: a(1, 3),
  C4: a(4, 0),
  C5: a(1, 3),
  C6: a(2, 1),

  // GRUPO D
  D1: a(1, 0),
  D2: a(2, 1),
  D3: a(1, 0),
  D4: a(2, 1),
  D5: a(0, 2),
  D6: a(0, 1),

  // GRUPO E
  E1: a(3, 0),
  E2: a(1, 2),
  E3: a(3, 0),
  E4: a(2, 1),
  E5: a(1, 2),
  E6: a(1, 1),

  // GRUPO F
  F1: a(2, 2),
  F2: a(2, 1),
  F3: a(0, 3),
  F4: a(4, 1),
  F5: a(3, 1),
  F6: a(1, 3),

  // GRUPO G
  G1: a(3, 1),
  G2: a(2, 1),
  G3: a(3, 1),
  G4: a(1, 1),
  G5: a(1, 2),
  G6: a(0, 2),

  // GRUPO H
  H1: a(3, 0),
  H2: a(1, 2),
  H3: a(4, 1),
  H4: a(2, 0),
  H5: a(0, 2),
  H6: a(1, 2),

  // GRUPO I
  I1: a(4, 0),
  I2: a(2, 0),
  I3: a(2, 0),
  I4: a(0, 1),
  I5: a(0, 3),
  I6: a(2, 1),

  // GRUPO J
  J1: a(2, 0),
  J2: a(3, 1),
  J3: a(3, 0),
  J4: a(1, 1),
  J5: a(1, 1),
  J6: a(0, 3),

  // GRUPO K
  K1: a(2, 0),
  K2: a(1, 2),
  K3: a(3, 0),
  K4: a(2, 1),
  K5: a(0, 1),
  K6: a(0, 0),

  // GRUPO L
  L1: a(3, 1),
  L2: a(2, 1),
  L3: a(4, 0),
  L4: a(0, 2),
  L5: a(0, 5),
  L6: a(2, 1),
};

// ════════════════════════════════════════════════════════════
// JOCELMO (MOTORISTA)
// Scanned landscape. Mix of numbers and X marks.
// ════════════════════════════════════════════════════════════
const jocelmoBets: PlayerBets = {
  // GRUPO A
  A1: a(2, 0),
  A2: s('away'),
  A3: a(2, 1),
  A4: s('draw'),
  A5: a(2, 2),
  A6: s('draw'),

  // GRUPO B
  B1: s('draw'),
  B2: s('away'),
  B3: a(2, 1),
  B4: s('home'),
  B5: s('home'),
  B6: a(3, 1),

  // GRUPO C
  C1: s('home'),
  C2: a(0, 2),
  C3: a(1, 2),
  C4: a(2, 0),
  C5: s('draw'),
  C6: a(2, 0),

  // GRUPO D
  D1: a(1, 1),
  D2: s('away'),
  D3: a(2, 2),
  D4: s('home'),
  D5: s('away'),
  D6: a(1, 2),

  // GRUPO E
  E1: a(3, 0),
  E2: s('draw'),
  E3: s('home'),
  E4: a(2, 0),
  E5: a(0, 2),
  E6: s('away'),

  // GRUPO F
  F1: a(1, 1),
  F2: s('home'),
  F3: s('away'),
  F4: a(2, 1),
  F5: s('home'),
  F6: s('away'),

  // GRUPO G
  G1: s('home'),
  G2: s('home'),
  G3: a(3, 1),
  G4: s('draw'),
  G5: s('draw'),
  G6: a(1, 4),

  // GRUPO H
  H1: s('home'),
  H2: s('away'),
  H3: a(3, 1),
  H4: a(2, 0),
  H5: s('away'),
  H6: a(1, 3),

  // GRUPO I
  I1: a(3, 2),
  I2: s('away'),
  I3: s('home'),
  I4: s('draw'),
  I5: s('away'),
  I6: a(2, 0),

  // GRUPO J
  J1: s('home'),
  J2: a(2, 1),
  J3: s('home'),
  J4: s('draw'),
  J5: s('away'),
  J6: a(0, 2),

  // GRUPO K
  K1: a(2, 0),
  K2: s('away'),
  K3: s('home'),
  K4: a(2, 1),
  K5: s('away'),
  K6: a(1, 2),

  // GRUPO L
  L1: s('draw'),
  L2: s('home'),
  L3: a(2, 0),
  L4: a(0, 2),
  L5: a(0, 2),
  L6: s('home'),
};

// ════════════════════════════════════════════════════════════
// JORGE EDSON
// PDF: jorge-edson.pdf (a preencher)
// ════════════════════════════════════════════════════════════
const jorgeEdsonBets: PlayerBets = {
  // GRUPO A
  A1: a(2, 0),
  A2: a(2, 0),
  A3: a(0, 2),
  A4: a(3, 1),
  A5: a(0, 2),
  A6: a(2, 1),

  // GRUPO B
  B1: a(2, 1),
  B2: a(0, 2),
  B3: a(0, 0),
  B4: a(2, 1),
  B5: a(2, 1),
  B6: a(2, 0),

  // GRUPO C
  C1: a(2, 0),
  C2: a(1, 1),
  C3: a(0, 2),
  C4: a(3, 0),
  C5: a(0, 2),
  C6: a(2, 1),

  // GRUPO D
  D1: a(2, 1),
  D2: a(1, 2),
  D3: a(2, 1),
  D4: a(2, 1),
  D5: a(2, 0),
  D6: a(2, 0),

  // GRUPO E
  E1: a(2, 1),
  E2: a(2, 2),
  E3: a(1, 1),
  E4: a(2, 0),
  E5: a(0, 2),
  E6: a(2, 0),

  // GRUPO F
  F1: a(0, 2),
  F2: a(0, 2),
  F3: a(0, 2),
  F4: a(0, 2),
  F5: a(0, 2),
  F6: a(0, 1),

  // GRUPO G
  G1: a(0, 2),
  G2: a(3, 1),
  G3: a(2, 1),
  G4: a(2, 1),
  G5: a(2, 1),
  G6: a(2, 2),

  // GRUPO H
  H1: a(2, 1),
  H2: a(0, 2),
  H3: a(0, 2),
  H4: a(2, 0),
  H5: a(1, 0),
  H6: a(1, 2),

  // GRUPO I
  I1: a(3, 0),
  I2: a(1, 2),
  I3: a(2, 0),
  I4: a(2, 0),
  I5: a(0, 2),
  I6: a(2, 1),

  // GRUPO J
  J1: a(0, 2),
  J2: a(0, 2),
  J3: a(2, 0),
  J4: a(2, 0),
  J5: a(2, 1),
  J6: a(0, 2),

  // GRUPO K
  K1: a(2, 0),
  K2: a(0, 2),
  K3: a(2, 0),
  K4: a(2, 0),
  K5: a(0, 2),
  K6: a(2, 2),

  // GRUPO L
  L1: a(0, 2),
  L2: a(3, 3),
  L3: a(3, 1),
  L4: a(0, 3),
  L5: a(0, 3),
  L6: a(2, 0),
};

// ════════════════════════════════════════════════════════════
// JORGE FERNANDES
// PDF: jorge-fernandes.pdf (a preencher)
// ════════════════════════════════════════════════════════════
const jorgeFernandesBets: PlayerBets = {
  // GRUPO A
  A1: s('away'),
  A2: s('draw'),
  A3: s('draw'),
  A4: s('home'),
  A5: s('away'),
  A6: s('home'),

  // GRUPO B
  B1: s('draw'),
  B2: s('away'),
  B3: s('home'),
  B4: s('draw'),
  B5: s('draw'),
  B6: s('away'),

  // GRUPO C
  C1: a(3, 1),
  C2: s('away'),
  C3: s('away'),
  C4: s('home'),
  C5: s('away'),
  C6: s('home'),

  // GRUPO D
  D1: s('home'),
  D2: s('home'),
  D3: s('away'),
  D4: s('draw'),
  D5: s('away'),
  D6: s('home'),

  // GRUPO E
  E1: s('home'),
  E2: s('draw'),
  E3: a(2, 0),
  E4: s('home'),
  E5: s('away'),
  E6: s('away'),

  // GRUPO F
  F1: s('draw'),
  F2: s('home'),
  F3: s('away'),
  F4: s('draw'),
  F5: s('away'),
  F6: s('away'),

  // GRUPO G
  G1: s('draw'),
  G2: s('draw'),
  G3: s('home'),
  G4: s('away'),
  G5: a(3, 0),
  G6: a(0, 2),

  // GRUPO H
  H1: s('home'),
  H2: s('draw'),
  H3: a(3, 0),
  H4: a(1, 0),
  H5: s('away'),
  H6: s('away'),

  // GRUPO I
  I1: s('home'),
  I2: s('away'),
  I3: s('home'),
  I4: s('draw'),
  I5: s('away'),
  I6: s('home'),

  // GRUPO J
  J1: s('home'),
  J2: s('draw'),
  J3: s('home'),
  J4: s('draw'),
  J5: s('away'),
  J6: s('away'),

  // GRUPO K
  K1: a(3, 0),
  K2: a(0, 2),
  K3: s('home'),
  K4: s('home'),
  K5: s('draw'),
  K6: s('away'),

  // GRUPO L
  L1: s('draw'),
  L2: s('home'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('draw'),
};

// ════════════════════════════════════════════════════════════
// KAMILLA RAVENNA (FARMÁCIA)
// Scanned landscape. Data: 29/06/26.
// ALL NUMBERS = all avançada bets.
// ════════════════════════════════════════════════════════════
const kamillaBets: PlayerBets = {
  // GRUPO A
  A1: a(3, 2),
  A2: a(4, 1),
  A3: a(0, 2),
  A4: a(1, 1),
  A5: a(0, 1),
  A6: a(0, 0),

  // GRUPO B
  B1: a(1, 0),
  B2: a(0, 0),
  B3: a(2, 1),
  B4: a(1, 1),
  B5: a(0, 1),
  B6: a(0, 3),

  // GRUPO C
  C1: a(3, 0),
  C2: a(0, 1),
  C3: a(2, 2),
  C4: a(2, 1),
  C5: a(0, 4),
  C6: a(0, 0),

  // GRUPO D
  D1: a(3, 1),
  D2: a(4, 1),
  D3: a(0, 3),
  D4: a(2, 0),
  D5: a(1, 1),
  D6: a(2, 1),

  // GRUPO E
  E1: a(5, 0),
  E2: a(3, 2),
  E3: a(2, 0),
  E4: a(1, 1),
  E5: a(2, 3),
  E6: a(1, 1),

  // GRUPO F
  F1: a(1, 3),
  F2: a(0, 0),
  F3: a(0, 1),
  F4: a(2, 0),
  F5: a(2, 2),
  F6: a(1, 3),

  // GRUPO G
  G1: a(0, 0),
  G2: a(1, 0),
  G3: a(2, 1),
  G4: a(2, 2),
  G5: a(3, 3),
  G6: a(0, 1),

  // GRUPO H
  H1: a(5, 0),
  H2: a(2, 4),
  H3: a(4, 0),
  H4: a(2, 1),
  H5: a(1, 1),
  H6: a(2, 3),

  // GRUPO I
  I1: a(3, 1),
  I2: a(0, 0),
  I3: a(2, 0),
  I4: a(1, 2),
  I5: a(0, 1),
  I6: a(1, 0),

  // GRUPO J
  J1: a(3, 0),
  J2: a(1, 1),
  J3: a(2, 0),
  J4: a(0, 0),
  J5: a(1, 3),
  J6: a(0, 2),

  // GRUPO K
  K1: a(2, 0),
  K2: a(0, 0),
  K3: a(1, 0),
  K4: a(2, 0),
  K5: a(2, 3),
  K6: a(1, 1),

  // GRUPO L
  L1: a(2, 2),
  L2: a(2, 1),
  L3: a(1, 0),
  L4: a(2, 2),
  L5: a(1, 0),
  L6: a(0, 0),
};

// ════════════════════════════════════════════════════════════
// NETINHO (form name "Samug nito")
// Forma horizontal (foto). Data: 09/06/26
// ════════════════════════════════════════════════════════════
const netinhoBets: PlayerBets = {
  // GRUPO A
  A1: a(1, 1),
  A2: s('draw'),
  A3: s('away'),
  A4: s('home'),
  A5: s('away'),
  A6: s('home'),

  // GRUPO B
  B1: s('draw'),
  B2: a(0, 2),
  B3: s('draw'),
  B4: s('draw'),
  B5: s('home'),
  B6: s('draw'),

  // GRUPO C
  C1: a(3, 0),
  C2: s('away'),
  C3: a(2, 2),
  C4: s('home'),
  C5: a(0, 2),
  C6: s('home'),

  // GRUPO D
  D1: s('home'),
  D2: s('draw'),
  D3: a(1, 2),
  D4: s('home'),
  D5: a(0, 2),
  D6: s('draw'),

  // GRUPO E
  E1: s('home'),
  E2: s('draw'),
  E3: s('draw'),
  E4: a(2, 0),
  E5: s('draw'),
  E6: s('away'),

  // GRUPO F
  F1: s('draw'),
  F2: s('draw'),
  F3: s('away'),
  F4: s('home'),
  F5: s('home'),
  F6: s('away'),

  // GRUPO G
  G1: a(2, 0),
  G2: s('draw'),
  G3: s('home'),
  G4: s('draw'),
  G5: s('home'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: a(1, 2),
  H3: s('home'),
  H4: s('home'),
  H5: s('draw'),
  H6: a(0, 2),

  // GRUPO I
  I1: s('draw'),
  I2: s('away'),
  I3: s('home'),
  I4: s('draw'),
  I5: s('away'),
  I6: s('home'),

  // GRUPO J
  J1: s('home'),
  J2: s('home'),
  J3: s('draw'),
  J4: s('home'),
  J5: s('away'),
  J6: s('away'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('draw'),
  K6: s('draw'),

  // GRUPO L
  L1: a(2, 1),
  L2: s('home'),
  L3: s('home'),
  L4: a(1, 2),
  L5: s('away'),
  L6: s('draw'),
};

// ════════════════════════════════════════════════════════════
// REBECA MONTENEGRO (ADM)
// Scanned landscape. Data: 10/06/26. Mix (numbers and marks).
// Note: form is black & white scan.
// ════════════════════════════════════════════════════════════
const rebecaBets: PlayerBets = {
  // GRUPO A
  A1: a(2, 1),
  A2: a(1, 1),
  A3: a(1, 0),
  A4: a(1, 2),
  A5: a(1, 1),
  A6: a(0, 1),

  // GRUPO B
  B1: a(2, 0),
  B2: a(1, 1),
  B3: a(1, 1),
  B4: a(2, 1),
  B5: a(2, 0),
  B6: a(1, 1),

  // GRUPO C
  C1: a(3, 0),
  C2: a(0, 2),
  C3: a(1, 1),
  C4: a(4, 0),
  C5: a(0, 2),
  C6: a(2, 0),

  // GRUPO D
  D1: a(2, 1),
  D2: a(1, 2),
  D3: a(1, 1),
  D4: a(2, 0),
  D5: a(1, 2),
  D6: a(1, 1),

  // GRUPO E
  E1: a(3, 0),
  E2: a(1, 1),
  E3: a(2, 0),
  E4: a(1, 2),
  E5: a(1, 1),
  E6: a(1, 2),

  // GRUPO F
  F1: a(2, 0),
  F2: a(1, 1),
  F3: a(0, 2),
  F4: a(2, 1),
  F5: a(1, 1),
  F6: a(0, 2),

  // GRUPO G
  G1: a(2, 0),
  G2: a(0, 2),
  G3: a(2, 1),
  G4: a(1, 1),
  G5: a(1, 0),
  G6: a(0, 2),

  // GRUPO H
  H1: a(3, 0),
  H2: a(1, 2),
  H3: a(2, 0),
  H4: a(2, 0),
  H5: a(0, 1),
  H6: a(1, 1),

  // GRUPO I
  I1: a(3, 0),
  I2: a(0, 2),
  I3: a(2, 0),
  I4: a(1, 1),
  I5: a(1, 2),
  I6: a(2, 0),

  // GRUPO J
  J1: a(3, 0),
  J2: a(2, 0),
  J3: a(0, 1),
  J4: a(1, 1),
  J5: a(1, 1),
  J6: a(0, 3),

  // GRUPO K
  K1: a(3, 0),
  K2: a(1, 1),
  K3: a(2, 0),
  K4: a(2, 0),
  K5: a(1, 1),
  K6: a(1, 2),

  // GRUPO L
  L1: a(2, 1),
  L2: a(2, 1),
  L3: a(3, 0),
  L4: a(1, 2),
  L5: a(1, 1),
  L6: a(2, 1),
};

// ════════════════════════════════════════════════════════════
// ROSINALDO BARBOSA (FATURAMENTO)
// Scanned landscape. Data: 09/06/26. All X marks.
// ════════════════════════════════════════════════════════════
const rosinaldoBets: PlayerBets = {
  // GRUPO A
  A1: s('away'),
  A2: s('away'),
  A3: s('draw'),
  A4: s('home'),
  A5: s('home'),
  A6: s('home'),

  // GRUPO B
  B1: s('home'),
  B2: s('away'),
  B3: s('home'),
  B4: s('away'),
  B5: s('home'),
  B6: s('away'),

  // GRUPO C
  C1: s('home'),
  C2: s('away'),
  C3: s('away'),
  C4: s('home'),
  C5: s('away'),
  C6: s('home'),

  // GRUPO D
  D1: s('home'),
  D2: s('away'),
  D3: s('home'),
  D4: s('home'),
  D5: s('draw'),
  D6: s('home'),

  // GRUPO E
  E1: s('home'),
  E2: s('home'),
  E3: s('home'),
  E4: s('home'),
  E5: s('away'),
  E6: s('away'),

  // GRUPO F
  F1: s('home'),
  F2: s('home'),
  F3: s('away'),
  F4: s('home'),
  F5: s('home'),
  F6: s('away'),

  // GRUPO G
  G1: s('home'),
  G2: s('home'),
  G3: s('home'),
  G4: s('away'),
  G5: s('home'),
  G6: s('away'),

  // GRUPO H
  H1: s('home'),
  H2: s('away'),
  H3: s('home'),
  H4: s('home'),
  H5: s('away'),
  H6: s('away'),

  // GRUPO I
  I1: s('home'),
  I2: s('away'),
  I3: s('home'),
  I4: s('home'),
  I5: s('away'),
  I6: s('home'),

  // GRUPO J
  J1: s('home'),
  J2: s('home'),
  J3: s('home'),
  J4: s('away'),
  J5: s('home'),
  J6: s('away'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('draw'),
  K6: s('away'),

  // GRUPO L
  L1: s('home'),
  L2: s('home'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('away'),
};



// ─── Conversão para formato interno (não editar abaixo) ──────────────
function expand(participantId: string, bets: PlayerBets): ParticipantBet[] {
  return Object.entries(bets).map(([gameId, bet]) => ({ participantId, gameId, bet }));
}

export const BETS: ParticipantBet[] = [
  ...expand('eduardo-alex',  eduardoAlexBets),
  ...expand('joao-paulo-1',    joaoPaulo1Bets),
  ...expand('joao-paulo-2',    joaoPaulo2Bets),
  ...expand('kamilla',       kamillaBets),
  ...expand('enio-1',        enio1Bets),
  ...expand('enio-2',        enio2Bets),
  ...expand('bruno-1',       bruno1Bets),
  ...expand('bruno-2',       bruno2Bets),
  ...expand('jocelmo',       jocelmoBets),
  ...expand('diego',         diegoBets),
  ...expand('netinho',       netinhoBets),
  ...expand('rebeca',        rebecaBets),
  ...expand('cleber',        cleberBets),
  ...expand('graca',         gracaBets),
  ...expand('igor',          igorBets),
  ...expand('ionaldo-jr',    ionaldoBets),
  ...expand('rosinaldo',        rosinaldoBets),
  ...expand('jorge-edson',      jorgeEdsonBets),
  ...expand('jorge-fernandes',  jorgeFernandesBets),
];
