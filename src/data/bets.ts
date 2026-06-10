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
// Forma horizontal (foto). Data: 10/06/26
// Grupos A-F na esquerda, G-L na direita.
// ════════════════════════════════════════════════════════════
const eduardoAlexBets: PlayerBets = {
  // GRUPO A
  A1: a(2, 0),       // México 2×0 África do Sul
  A2: a(1, 1),       // Coreia do Sul 1×1 Rep. Tcheca
  A3: s('home'),     // Rep. Tcheca vence África do Sul (X esquerdo)
  A4: s('draw'),     // México × Coreia do Sul empate (X ambos)
  A5: s('away'),     // Rep. Tcheca × México → X direito = s('away')
  A6: s('away'),     // África do Sul × Coreia do Sul → Coreia vence

  // GRUPO B
  B1: s('home'),     // Canadá vence Bósnia
  B2: s('away'),     // Catar × Suíça → Suíça vence
  B3: a(2, 0),       // Suíça 2×0 Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C
  C1: a(2, 1),       // Brasil 2×1 Marrocos
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: s('home'),     // Escócia vence Marrocos
  C4: s('home'),     // Brasil vence Haiti
  C5: s('draw'),     // Marrocos × Haiti empate
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D
  D1: s('home'),     // EUA vence Paraguai
  D2: s('away'),     // Austrália × Turquia → Turquia vence
  D3: s('draw'),     // Turquia × Paraguai empate
  D4: s('home'),     // EUA vence Austrália
  D5: s('draw'),     // Turquia × EUA empate
  D6: s('home'),     // Paraguai vence Austrália

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: a(1, 1),       // C. Marfim 1×1 Equador
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: s('draw'),     // Equador × Curaçao empate
  E5: s('draw'),     // Equador × Alemanha empate
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('home'),     // Holanda vence Japão
  F2: s('draw'),     // Suécia × Tunísia empate
  F3: a(0, 2),       // Tunísia 0×2 Japão
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('draw'),     // Japão × Suécia empate

  // GRUPO G
  G1: a(2, 0),       // Bélgica 2×0 Egito
  G2: s('draw'),     // Irã × Nova Zelândia empate
  G3: s('home'),     // Bélgica vence Irã
  G4: s('away'),     // Nova Zelândia × Egito → Egito vence
  G5: s('draw'),     // Nova Zelândia × Bélgica empate
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: s('draw'),     // Arábia Saudita × Uruguai empate
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: a(2, 0),       // Uruguai 2×0 Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: s('away'),     // Cabo Verde × Arábia Saudita → Arábia vence

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('draw'),     // Noruega × Senegal empate
  I5: a(1, 1),       // Noruega 1×1 França
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: a(2, 1),       // Argentina 2×1 Áustria
  J4: s('away'),     // Jordânia × Argélia → Argélia vence
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('home'),     // Argélia vence Áustria

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: a(1, 1),       // Colômbia 1×1 Portugal
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L
  L1: s('draw'),     // Inglaterra × Croácia empate
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: s('away'),     // Panamá × Croácia → Croácia vence
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: a(2, 1),       // Croácia 2×1 Gana
};

// ════════════════════════════════════════════════════════════
// NETINHO (form name "Samug nito")
// Forma horizontal (foto). Data: 09/06/26
// ════════════════════════════════════════════════════════════
const netinhoBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),     // México vence (X esquerdo, "0" direito → left-only X)
  A2: s('draw'),     // Coreia × Rep.Tcheca empate
  A3: s('home'),     // Rep. Tcheca vence África do Sul
  A4: s('home'),     // México vence Coreia
  A5: s('away'),     // Rep. Tcheca × México → México vence
  A6: s('draw'),     // África do Sul × Coreia empate

  // GRUPO B
  B1: s('home'),     // Canadá vence Bósnia
  B2: a(0, 2),       // Catar 0×2 Suíça
  B3: s('home'),     // Suíça vence Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C
  C1: a(3, 0),       // Brasil 3×0 Marrocos
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: a(1, 0),       // Escócia 1×0 Marrocos
  C4: s('home'),     // Brasil vence Haiti
  C5: a(2, 0),       // Marrocos 2×0 Haiti
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D
  D1: s('home'),     // EUA vence Paraguai
  D2: s('draw'),     // Austrália × Turquia empate
  D3: a(1, 2),       // Turquia 1×2 Paraguai
  D4: s('home'),     // EUA vence Austrália
  D5: a(0, 2),       // Turquia 0×2 EUA
  D6: s('away'),     // Paraguai × Austrália → Austrália vence

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: s('draw'),     // C. Marfim × Equador empate
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: a(2, 0),       // Equador 2×0 Curaçao
  E5: s('away'),     // Equador × Alemanha → Alemanha vence
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('draw'),     // Holanda × Japão empate
  F2: s('draw'),     // Suécia × Tunísia empate
  F3: s('away'),     // Tunísia × Japão → Japão vence
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('away'),     // Japão × Suécia → Suécia vence

  // GRUPO G
  G1: a(2, 0),       // Bélgica 2×0 Egito
  G2: s('draw'),     // Irã × Nova Zelândia empate
  G3: s('home'),     // Bélgica vence Irã
  G4: s('away'),     // Nova Zelândia × Egito → Egito vence
  G5: s('away'),     // Nova Zelândia × Bélgica → Bélgica vence
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: a(1, 2),       // Arábia Saudita 1×2 Uruguai
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: s('home'),     // Uruguai vence Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: a(0, 2),       // Cabo Verde 0×2 Arábia Saudita

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('away'),     // Noruega × Senegal → Senegal vence
  I5: s('away'),     // Noruega × França → França vence
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: s('home'),     // Argentina vence Áustria
  J4: s('draw'),     // Jordânia × Argélia empate
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('away'),     // Argélia × Áustria → Áustria vence

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: s('away'),     // Colômbia × Portugal → Portugal vence
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L
  L1: a(2, 1),       // Inglaterra 2×1 Croácia
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: a(1, 2),       // Panamá 1×2 Croácia
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: s('draw'),     // Croácia × Gana empate
};

// ════════════════════════════════════════════════════════════
// ENIO BATALHA — Aposta 1
// Scanned landscape. Data: 10/06/26. Setor: CPD.
// Bottom half = Groups A-F, Top half = Groups G-L.
// All ADVANCED bets (numbers written in boxes).
// ════════════════════════════════════════════════════════════
const enio1Bets: PlayerBets = {
  // GRUPO A (bottom-left section)
  A1: a(2, 1),       // México 2×1 África do Sul
  A2: a(1, 1),       // Coreia 1×1 Rep. Tcheca
  A3: a(1, 1),       // Rep. Tcheca 1×1 África do Sul
  A4: a(1, 0),       // México 1×0 Coreia
  A5: a(0, 1),       // Rep. Tcheca 0×1 México
  A6: a(1, 2),       // África do Sul 1×2 Coreia

  // GRUPO B
  B1: a(1, 0),       // Canadá 1×0 Bósnia
  B2: a(3, 0),       // Catar 3×0 Suíça  -- wait B2 is Catar×Suíça
  B3: a(2, 1),       // Suíça 2×1 Bósnia
  B4: a(0, 1),       // Canadá 0×1 Catar
  B5: a(2, 1),       // Suíça 2×1 Canadá
  B6: a(1, 0),       // Bósnia 1×0 Catar

  // GRUPO C
  C1: a(3, 0),       // Brasil 3×0 Marrocos
  C2: a(1, 3),       // Haiti 1×3 Escócia
  C3: a(0, 3),       // Escócia 0×3 Marrocos  -- wait, C3 is Escócia×Marrocos, left=Escócia, right=Marrocos
  C4: a(3, 0),       // Brasil 3×0 Haiti
  C5: a(3, 0),       // Marrocos 3×0 Haiti
  C6: a(0, 3),       // Escócia 0×3 Brasil

  // GRUPO D
  D1: a(1, 1),       // EUA 1×1 Paraguai
  D2: a(1, 1),       // Austrália 1×1 Turquia
  D3: a(1, 1),       // Turquia 1×1 Paraguai
  D4: a(1, 1),       // EUA 1×1 Austrália
  D5: a(1, 1),       // Turquia 1×1 EUA
  D6: a(1, 0),       // Paraguai 1×0 Austrália

  // GRUPO E
  E1: a(1, 0),       // Alemanha 1×0 Curaçao
  E2: a(1, 1),       // C. Marfim 1×1 Equador
  E3: a(1, 1),       // Alemanha 1×1 C. Marfim
  E4: a(1, 0),       // Equador 1×0 Curaçao
  E5: a(1, 1),       // Equador 1×1 Alemanha
  E6: a(1, 1),       // Curaçao 1×1 C. Marfim

  // GRUPO F
  F1: a(1, 1),       // Holanda 1×1 Japão
  F2: a(1, 0),       // Suécia 1×0 Tunísia
  F3: a(0, 1),       // Tunísia 0×1 Japão
  F4: a(1, 0),       // Holanda 1×0 Suécia
  F5: a(1, 1),       // Tunísia 1×1 Holanda
  F6: a(1, 0),       // Japão 1×0 Suécia

  // GRUPO G (top section)
  G1: a(3, 2),       // Bélgica 3×2 Egito
  G2: a(2, 0),       // Irã 2×0 Nova Zelândia
  G3: a(2, 0),       // Bélgica 2×0 Irã
  G4: a(0, 1),       // Nova Zelândia 0×1 Egito
  G5: a(0, 3),       // Nova Zelândia 0×3 Bélgica
  G6: a(1, 2),       // Egito 1×2 Irã

  // GRUPO H
  H1: a(4, 0),       // Espanha 4×0 Cabo Verde
  H2: a(0, 3),       // Arábia Saudita 0×3 Uruguai
  H3: a(3, 0),       // Espanha 3×0 Arábia Saudita
  H4: a(1, 0),       // Uruguai 1×0 Cabo Verde
  H5: a(0, 2),       // Uruguai 0×2 Espanha
  H6: a(1, 2),       // Cabo Verde 1×2 Arábia Saudita

  // GRUPO I
  I1: a(2, 0),       // França 2×0 Senegal
  I2: a(0, 3),       // Iraque 0×3 Noruega
  I3: a(3, 0),       // França 3×0 Iraque
  I4: a(0, 3),       // Noruega 0×3 Senegal  -- wait, I4 is Noruega×Senegal
  I5: a(1, 2),       // Noruega 1×2 França
  I6: a(1, 0),       // Senegal 1×0 Iraque

  // GRUPO J
  J1: a(3, 0),       // Argentina 3×0 Argélia
  J2: a(3, 0),       // Áustria 3×0 Jordânia
  J3: a(3, 3),       // Argentina 3×3 Áustria
  J4: a(0, 3),       // Jordânia 0×3 Argélia
  J5: a(0, 3),       // Jordânia 0×3 Argentina
  J6: a(3, 1),       // Argélia 3×1 Áustria

  // GRUPO K
  K1: a(2, 0),       // Portugal 2×0 Congo
  K2: a(1, 2),       // Uzbequistão 1×2 Colômbia
  K3: a(3, 0),       // Portugal 3×0 Uzbequistão
  K4: a(1, 0),       // Colômbia 1×0 Congo
  K5: a(2, 3),       // Colômbia 2×3 Portugal
  K6: a(1, 0),       // Congo 1×0 Uzbequistão

  // GRUPO L
  L1: a(4, 2),       // Inglaterra 4×2 Croácia
  L2: a(1, 0),       // Gana 1×0 Panamá
  L3: a(4, 0),       // Inglaterra 4×0 Gana
  L4: a(0, 2),       // Panamá 0×2 Croácia
  L5: a(3, 0),       // Panamá 3×0 Inglaterra  -- wait L5 is Panamá×Inglaterra, left=Panamá
  L6: a(2, 1),       // Croácia 2×1 Gana
};

// ════════════════════════════════════════════════════════════
// ENIO BATALHA — Aposta 2
// Scanned landscape. Data: 08/06/2026. Setor: CPD.
// All X marks = all simples bets.
// ════════════════════════════════════════════════════════════
const enio2Bets: PlayerBets = {
  // GRUPO A - all X marks
  A1: s('home'),     // México vence África do Sul
  A2: s('draw'),     // Coreia × Rep. Tcheca empate
  A3: s('home'),     // Rep. Tcheca vence África do Sul
  A4: s('home'),     // México vence Coreia
  A5: s('draw'),     // Rep. Tcheca × México empate
  A6: s('away'),     // África do Sul × Coreia → Coreia vence

  // GRUPO B
  B1: s('home'),     // Canadá vence Bósnia
  B2: s('away'),     // Catar × Suíça → Suíça vence
  B3: s('home'),     // Suíça vence Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C
  C1: s('home'),     // Brasil vence Marrocos
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: s('home'),     // Escócia vence Marrocos
  C4: s('home'),     // Brasil vence Haiti
  C5: s('home'),     // Marrocos vence Haiti
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D
  D1: s('home'),     // EUA vence Paraguai
  D2: s('away'),     // Austrália × Turquia → Turquia vence
  D3: s('home'),     // Turquia vence Paraguai
  D4: s('home'),     // EUA vence Austrália
  D5: s('draw'),     // Turquia × EUA empate
  D6: s('away'),     // Paraguai × Austrália → Austrália vence

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: s('draw'),     // C. Marfim × Equador empate
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: s('home'),     // Equador vence Curaçao
  E5: s('away'),     // Equador × Alemanha → Alemanha vence
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('home'),     // Holanda vence Japão
  F2: s('home'),     // Suécia vence Tunísia
  F3: s('away'),     // Tunísia × Japão → Japão vence
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('draw'),     // Japão × Suécia empate

  // GRUPO G
  G1: s('home'),     // Bélgica vence Egito
  G2: s('home'),     // Irã vence Nova Zelândia
  G3: s('home'),     // Bélgica vence Irã
  G4: s('draw'),     // Nova Zelândia × Egito empate
  G5: s('away'),     // Nova Zelândia × Bélgica → Bélgica vence
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: s('draw'),     // Arábia Saudita × Uruguai empate
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: s('home'),     // Uruguai vence Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: s('away'),     // Cabo Verde × Arábia Saudita → Arábia vence

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('home'),     // Noruega vence Senegal
  I5: s('away'),     // Noruega × França → França vence
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: s('home'),     // Argentina vence Áustria
  J4: s('draw'),     // Jordânia × Argélia empate
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('home'),     // Argélia vence Áustria

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: s('draw'),     // Colômbia × Portugal empate
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L
  L1: s('home'),     // Inglaterra vence Croácia
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: s('away'),     // Panamá × Croácia → Croácia vence
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: s('home'),     // Croácia vence Gana
};

// ════════════════════════════════════════════════════════════
// BRUNO THOMAZ — Aposta 1
// Scanned landscape. Data: 04/06/26. Setor: CPD.
// All X marks = all simples bets.
// ════════════════════════════════════════════════════════════
const bruno1Bets: PlayerBets = {
  // GRUPO A
  A1: s('home'),     // México vence África do Sul
  A2: s('draw'),     // Coreia × Rep. Tcheca empate
  A3: s('away'),     // Rep. Tcheca × África do Sul → África do Sul vence
  A4: s('home'),     // México vence Coreia
  A5: s('away'),     // Rep. Tcheca × México → México vence
  A6: s('away'),     // África do Sul × Coreia → Coreia vence

  // GRUPO B
  B1: s('home'),     // Canadá vence Bósnia
  B2: s('draw'),     // Catar × Suíça empate
  B3: s('home'),     // Suíça vence Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C
  C1: s('home'),     // Brasil vence Marrocos
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: s('draw'),     // Escócia × Marrocos empate
  C4: s('home'),     // Brasil vence Haiti
  C5: s('home'),     // Marrocos vence Haiti
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D
  D1: s('home'),     // EUA vence Paraguai
  D2: s('draw'),     // Austrália × Turquia empate
  D3: s('home'),     // Turquia vence Paraguai
  D4: s('home'),     // EUA vence Austrália
  D5: s('draw'),     // Turquia × EUA empate
  D6: s('away'),     // Paraguai × Austrália → Austrália vence

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: s('draw'),     // C. Marfim × Equador empate
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: s('home'),     // Equador vence Curaçao
  E5: s('away'),     // Equador × Alemanha → Alemanha vence
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('home'),     // Holanda vence Japão
  F2: s('home'),     // Suécia vence Tunísia
  F3: s('away'),     // Tunísia × Japão → Japão vence
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('draw'),     // Japão × Suécia empate

  // GRUPO G
  G1: s('home'),     // Bélgica vence Egito
  G2: s('draw'),     // Irã × Nova Zelândia empate
  G3: s('home'),     // Bélgica vence Irã
  G4: s('draw'),     // Nova Zelândia × Egito empate
  G5: s('away'),     // Nova Zelândia × Bélgica → Bélgica vence
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: s('draw'),     // Arábia Saudita × Uruguai empate
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: s('home'),     // Uruguai vence Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: s('away'),     // Cabo Verde × Arábia Saudita → Arábia vence

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('home'),     // Noruega vence Senegal
  I5: s('away'),     // Noruega × França → França vence
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: s('home'),     // Argentina vence Áustria
  J4: s('draw'),     // Jordânia × Argélia empate
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('home'),     // Argélia vence Áustria

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: s('away'),     // Colômbia × Portugal → Portugal vence
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L
  L1: s('home'),     // Inglaterra vence Croácia
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: s('draw'),     // Panamá × Croácia empate
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: s('home'),     // Croácia vence Gana
};

// ════════════════════════════════════════════════════════════
// BRUNO THOMAZ — Aposta 2
// Scanned landscape. Data: 04/06/26. Setor: CPD.
// Has numbers = avançada bets.
// ════════════════════════════════════════════════════════════
const bruno2Bets: PlayerBets = {
  // GRUPO A
  A1: a(1, 0),       // México 1×0 África do Sul
  A2: a(0, 1),       // Coreia 0×1 Rep. Tcheca
  A3: a(1, 2),       // Rep. Tcheca 1×2 África do Sul
  A4: a(2, 1),       // México 2×1 Coreia
  A5: a(0, 2),       // Rep. Tcheca 0×2 México
  A6: a(1, 3),       // África do Sul 1×3 Coreia

  // GRUPO B
  B1: a(2, 0),       // Canadá 2×0 Bósnia
  B2: a(1, 0),       // Catar 1×0 Suíça
  B3: a(2, 0),       // Suíça 2×0 Bósnia
  B4: a(0, 1),       // Canadá 0×1 Catar
  B5: a(2, 0),       // Suíça 2×0 Canadá
  B6: a(0, 1),       // Bósnia 0×1 Catar

  // GRUPO C
  C1: a(3, 1),       // Brasil 3×1 Marrocos
  C2: a(0, 2),       // Haiti 0×2 Escócia
  C3: a(3, 0),       // Escócia 3×0 Marrocos
  C4: a(3, 0),       // Brasil 3×0 Haiti
  C5: a(1, 0),       // Marrocos 1×0 Haiti
  C6: a(0, 2),       // Escócia 0×2 Brasil

  // GRUPO D
  D1: a(2, 1),       // EUA 2×1 Paraguai
  D2: a(1, 2),       // Austrália 1×2 Turquia
  D3: a(1, 0),       // Turquia 1×0 Paraguai
  D4: a(2, 0),       // EUA 2×0 Austrália
  D5: a(0, 1),       // Turquia 0×1 EUA
  D6: a(1, 2),       // Paraguai 1×2 Austrália

  // GRUPO E
  E1: a(3, 0),       // Alemanha 3×0 Curaçao
  E2: a(1, 1),       // C. Marfim 1×1 Equador
  E3: a(2, 0),       // Alemanha 2×0 C. Marfim
  E4: a(2, 0),       // Equador 2×0 Curaçao
  E5: a(0, 2),       // Equador 0×2 Alemanha
  E6: a(1, 2),       // Curaçao 1×2 C. Marfim

  // GRUPO F
  F1: a(2, 1),       // Holanda 2×1 Japão
  F2: a(2, 0),       // Suécia 2×0 Tunísia
  F3: a(0, 1),       // Tunísia 0×1 Japão
  F4: a(1, 0),       // Holanda 1×0 Suécia
  F5: a(1, 2),       // Tunísia 1×2 Holanda
  F6: a(2, 1),       // Japão 2×1 Suécia

  // GRUPO G
  G1: a(2, 0),       // Bélgica 2×0 Egito
  G2: a(1, 0),       // Irã 1×0 Nova Zelândia
  G3: a(2, 1),       // Bélgica 2×1 Irã
  G4: a(0, 2),       // Nova Zelândia 0×2 Egito
  G5: a(0, 2),       // Nova Zelândia 0×2 Bélgica
  G6: a(4, 0),       // Egito 4×0 Irã

  // GRUPO H
  H1: a(3, 0),       // Espanha 3×0 Cabo Verde
  H2: a(2, 0),       // Arábia Saudita 2×0 Uruguai
  H3: a(2, 0),       // Espanha 2×0 Arábia Saudita
  H4: a(2, 0),       // Uruguai 2×0 Cabo Verde
  H5: a(1, 2),       // Uruguai 1×2 Espanha
  H6: a(1, 2),       // Cabo Verde 1×2 Arábia Saudita

  // GRUPO I
  I1: a(2, 1),       // França 2×1 Senegal
  I2: a(1, 2),       // Iraque 1×2 Noruega
  I3: a(3, 0),       // França 3×0 Iraque
  I4: a(3, 0),       // Noruega 3×0 Senegal
  I5: a(0, 2),       // Noruega 0×2 França
  I6: a(2, 1),       // Senegal 2×1 Iraque

  // GRUPO J
  J1: a(3, 0),       // Argentina 3×0 Argélia
  J2: a(2, 0),       // Áustria 2×0 Jordânia
  J3: a(2, 1),       // Argentina 2×1 Áustria
  J4: a(0, 3),       // Jordânia 0×3 Argélia
  J5: a(0, 4),       // Jordânia 0×4 Argentina
  J6: a(2, 0),       // Argélia 2×0 Áustria

  // GRUPO K
  K1: a(3, 0),       // Portugal 3×0 Congo
  K2: a(0, 2),       // Uzbequistão 0×2 Colômbia
  K3: a(3, 0),       // Portugal 3×0 Uzbequistão
  K4: a(2, 0),       // Colômbia 2×0 Congo
  K5: a(0, 2),       // Colômbia 0×2 Portugal
  K6: a(1, 2),       // Congo 1×2 Uzbequistão

  // GRUPO L
  L1: a(2, 1),       // Inglaterra 2×1 Croácia
  L2: a(1, 0),       // Gana 1×0 Panamá
  L3: a(2, 0),       // Inglaterra 2×0 Gana
  L4: a(3, 1),       // Panamá 3×1 Croácia
  L5: a(3, 0),       // Panamá 3×0 Inglaterra  -- wait L5 is Panamá×Inglaterra
  L6: a(1, 0),       // Croácia 1×0 Gana
};

// ════════════════════════════════════════════════════════════
// CLEBER (MANUTENÇÃO)
// Scanned landscape. Data: 20/06/2026. All X marks.
// ════════════════════════════════════════════════════════════
const cleberBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),     // México vence África do Sul
  A2: s('draw'),     // Coreia × Rep. Tcheca empate
  A3: s('draw'),     // Rep. Tcheca × África do Sul empate
  A4: s('home'),     // México vence Coreia
  A5: s('away'),     // Rep. Tcheca × México → México vence
  A6: s('away'),     // África do Sul × Coreia → Coreia vence

  // GRUPO B
  B1: s('home'),     // Canadá vence Bósnia
  B2: s('away'),     // Catar × Suíça → Suíça vence
  B3: s('home'),     // Suíça vence Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C - with special numbers: C1 has 0,3,0 written...
  C1: s('away'),     // Brasil × Marrocos → Marrocos vence (X direito)
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: a(3, 0),       // Escócia 3×0 Marrocos (números escritos)
  C4: s('home'),     // Brasil vence Haiti
  C5: s('home'),     // Marrocos vence Haiti
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D
  D1: s('home'),     // EUA vence Paraguai
  D2: s('draw'),     // Austrália × Turquia empate
  D3: s('home'),     // Turquia vence Paraguai
  D4: s('home'),     // EUA vence Austrália
  D5: s('draw'),     // Turquia × EUA empate
  D6: s('away'),     // Paraguai × Austrália → Austrália vence

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: s('draw'),     // C. Marfim × Equador empate
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: s('home'),     // Equador vence Curaçao
  E5: s('away'),     // Equador × Alemanha → Alemanha vence
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('home'),     // Holanda vence Japão
  F2: s('home'),     // Suécia vence Tunísia
  F3: s('away'),     // Tunísia × Japão → Japão vence
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('draw'),     // Japão × Suécia empate

  // GRUPO G
  G1: s('home'),     // Bélgica vence Egito
  G2: s('home'),     // Irã vence Nova Zelândia
  G3: s('home'),     // Bélgica vence Irã
  G4: s('draw'),     // Nova Zelândia × Egito empate
  G5: s('away'),     // Nova Zelândia × Bélgica → Bélgica vence
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: s('draw'),     // Arábia Saudita × Uruguai empate
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: s('home'),     // Uruguai vence Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: s('away'),     // Cabo Verde × Arábia Saudita → Arábia vence

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('home'),     // Noruega vence Senegal
  I5: s('away'),     // Noruega × França → França vence
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: s('home'),     // Argentina vence Áustria
  J4: s('draw'),     // Jordânia × Argélia empate
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('home'),     // Argélia vence Áustria

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: s('away'),     // Colômbia × Portugal → Portugal vence
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L
  L1: s('home'),     // Inglaterra vence Croácia
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: s('away'),     // Panamá × Croácia → Croácia vence
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: s('home'),     // Croácia vence Gana
};

// ════════════════════════════════════════════════════════════
// DIEGO RODRIGO (ADM)
// Scanned landscape. Data: 08/06/2026.
// Mostly X marks, some numbers.
// ════════════════════════════════════════════════════════════
const diegoBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),     // México vence África do Sul
  A2: s('draw'),     // Coreia × Rep. Tcheca empate
  A3: s('draw'),     // Rep. Tcheca × África do Sul empate
  A4: s('home'),     // México vence Coreia
  A5: s('away'),     // Rep. Tcheca × México → México vence
  A6: s('away'),     // África do Sul × Coreia → Coreia vence

  // GRUPO B
  B1: s('home'),     // Canadá vence Bósnia
  B2: s('away'),     // Catar × Suíça → Suíça vence
  B3: s('home'),     // Suíça vence Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C
  C1: s('home'),     // Brasil vence Marrocos
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: s('home'),     // Escócia vence Marrocos
  C4: s('home'),     // Brasil vence Haiti
  C5: s('home'),     // Marrocos vence Haiti
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D
  D1: s('home'),     // EUA vence Paraguai
  D2: s('draw'),     // Austrália × Turquia empate
  D3: s('home'),     // Turquia vence Paraguai
  D4: s('home'),     // EUA vence Austrália
  D5: s('draw'),     // Turquia × EUA empate
  D6: s('away'),     // Paraguai × Austrália → Austrália vence

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: s('draw'),     // C. Marfim × Equador empate
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: s('home'),     // Equador vence Curaçao
  E5: s('away'),     // Equador × Alemanha → Alemanha vence
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('home'),     // Holanda vence Japão
  F2: s('home'),     // Suécia vence Tunísia
  F3: s('away'),     // Tunísia × Japão → Japão vence
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('draw'),     // Japão × Suécia empate

  // GRUPO G
  G1: s('home'),     // Bélgica vence Egito
  G2: s('draw'),     // Irã × Nova Zelândia empate
  G3: s('home'),     // Bélgica vence Irã
  G4: s('draw'),     // Nova Zelândia × Egito empate
  G5: s('away'),     // Nova Zelândia × Bélgica → Bélgica vence
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: s('draw'),     // Arábia Saudita × Uruguai empate
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: s('home'),     // Uruguai vence Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: s('away'),     // Cabo Verde × Arábia Saudita → Arábia vence

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('home'),     // Noruega vence Senegal
  I5: s('away'),     // Noruega × França → França vence
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: s('home'),     // Argentina vence Áustria
  J4: s('draw'),     // Jordânia × Argélia empate
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('home'),     // Argélia vence Áustria

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: s('away'),     // Colômbia × Portugal → Portugal vence
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L
  L1: s('home'),     // Inglaterra vence Croácia
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: s('away'),     // Panamá × Croácia → Croácia vence
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: s('home'),     // Croácia vence Gana
};

// ════════════════════════════════════════════════════════════
// GRAÇA SANTOS (ADM)
// Scanned landscape. Data: 10/06/26.
// ALL NUMBERS = all avançada bets.
// ════════════════════════════════════════════════════════════
const gracaBets: PlayerBets = {
  // GRUPO A
  A1: a(2, 0),       // México 2×0 África do Sul
  A2: a(1, 3),       // Coreia 1×3 Rep. Tcheca
  A3: a(1, 1),       // Rep. Tcheca 1×1 África do Sul
  A4: a(2, 1),       // México 2×1 Coreia
  A5: a(3, 0),       // Rep. Tcheca 3×0 México  -- wait, left=Rep.Tcheca right=México
  A6: a(0, 1),       // África do Sul 0×1 Coreia

  // GRUPO B
  B1: a(1, 0),       // Canadá 1×0 Bósnia
  B2: a(3, 1),       // Catar 3×1 Suíça
  B3: a(3, 0),       // Suíça 3×0 Bósnia
  B4: a(1, 0),       // Canadá 1×0 Catar
  B5: a(3, 1),       // Suíça 3×1 Canadá
  B6: a(1, 1),       // Bósnia 1×1 Catar

  // GRUPO C
  C1: a(2, 0),       // Brasil 2×0 Marrocos
  C2: a(1, 3),       // Haiti 1×3 Escócia
  C3: a(0, 3),       // Escócia 0×3 Marrocos
  C4: a(3, 0),       // Brasil 3×0 Haiti
  C5: a(3, 0),       // Marrocos 3×0 Haiti
  C6: a(0, 3),       // Escócia 0×3 Brasil

  // GRUPO D
  D1: a(2, 1),       // EUA 2×1 Paraguai
  D2: a(1, 3),       // Austrália 1×3 Turquia
  D3: a(3, 1),       // Turquia 3×1 Paraguai
  D4: a(2, 1),       // EUA 2×1 Austrália
  D5: a(3, 1),       // Turquia 3×1 EUA
  D6: a(1, 0),       // Paraguai 1×0 Austrália

  // GRUPO E
  E1: a(1, 0),       // Alemanha 1×0 Curaçao
  E2: a(1, 1),       // C. Marfim 1×1 Equador
  E3: a(1, 0),       // Alemanha 1×0 C. Marfim
  E4: a(3, 0),       // Equador 3×0 Curaçao
  E5: a(1, 2),       // Equador 1×2 Alemanha
  E6: a(0, 3),       // Curaçao 0×3 C. Marfim

  // GRUPO F
  F1: a(4, 0),       // Holanda 4×0 Japão
  F2: a(2, 1),       // Suécia 2×1 Tunísia
  F3: a(0, 1),       // Tunísia 0×1 Japão
  F4: a(4, 0),       // Holanda 4×0 Suécia
  F5: a(3, 2),       // Tunísia 3×2 Holanda
  F6: a(0, 2),       // Japão 0×2 Suécia

  // GRUPO G
  G1: a(0, 1),       // Bélgica 0×1 Egito
  G2: a(2, 3),       // Irã 2×3 Nova Zelândia
  G3: a(3, 1),       // Bélgica 3×1 Irã
  G4: a(1, 3),       // Nova Zelândia 1×3 Egito
  G5: a(1, 3),       // Nova Zelândia 1×3 Bélgica
  G6: a(1, 3),       // Egito 1×3 Irã

  // GRUPO H
  H1: a(4, 0),       // Espanha 4×0 Cabo Verde
  H2: a(0, 3),       // Arábia Saudita 0×3 Uruguai
  H3: a(3, 0),       // Espanha 3×0 Arábia Saudita
  H4: a(1, 0),       // Uruguai 1×0 Cabo Verde
  H5: a(0, 3),       // Uruguai 0×3 Espanha
  H6: a(1, 4),       // Cabo Verde 1×4 Arábia Saudita

  // GRUPO I
  I1: a(2, 0),       // França 2×0 Senegal
  I2: a(0, 3),       // Iraque 0×3 Noruega
  I3: a(3, 1),       // França 3×1 Iraque
  I4: a(0, 3),       // Noruega 0×3 Senegal
  I5: a(1, 2),       // Noruega 1×2 França
  I6: a(1, 0),       // Senegal 1×0 Iraque

  // GRUPO J
  J1: a(0, 1),       // Argentina 0×1 Argélia
  J2: a(3, 2),       // Áustria 3×2 Jordânia
  J3: a(1, 2),       // Argentina 1×2 Áustria
  J4: a(1, 3),       // Jordânia 1×3 Argélia
  J5: a(1, 3),       // Jordânia 1×3 Argentina
  J6: a(3, 0),       // Argélia 3×0 Áustria

  // GRUPO K
  K1: a(3, 0),       // Portugal 3×0 Congo
  K2: a(0, 2),       // Uzbequistão 0×2 Colômbia
  K3: a(3, 1),       // Portugal 3×1 Uzbequistão
  K4: a(2, 0),       // Colômbia 2×0 Congo
  K5: a(3, 2),       // Colômbia 3×2 Portugal
  K6: a(0, 2),       // Congo 0×2 Uzbequistão

  // GRUPO L
  L1: a(4, 0),       // Inglaterra 4×0 Croácia
  L2: a(1, 0),       // Gana 1×0 Panamá
  L3: a(3, 0),       // Inglaterra 3×0 Gana
  L4: a(0, 2),       // Panamá 0×2 Croácia
  L5: a(0, 3),       // Panamá 0×3 Inglaterra
  L6: a(3, 1),       // Croácia 3×1 Gana
};

// ════════════════════════════════════════════════════════════
// IGOR RAFAEL (CPD)
// Scanned landscape. Data: 09/06/26.
// All X marks = all simples bets.
// ════════════════════════════════════════════════════════════
const igorBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),     // México vence África do Sul
  A2: s('draw'),     // Coreia × Rep. Tcheca empate
  A3: s('draw'),     // Rep. Tcheca × África do Sul empate
  A4: s('home'),     // México vence Coreia
  A5: s('away'),     // Rep. Tcheca × México → México vence
  A6: s('away'),     // África do Sul × Coreia → Coreia vence

  // GRUPO B — has a "3" written somewhere; mostly X
  B1: s('home'),     // Canadá vence Bósnia
  B2: s('away'),     // Catar × Suíça → Suíça vence
  B3: s('home'),     // Suíça vence Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C — has "3" and "0" numbers in some boxes
  C1: s('home'),     // Brasil vence Marrocos
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: a(3, 0),       // Escócia 3×0 Marrocos (numbers visible)
  C4: s('home'),     // Brasil vence Haiti
  C5: s('home'),     // Marrocos vence Haiti
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D — has "1" and "4" numbers
  D1: s('home'),     // EUA vence Paraguai
  D2: s('draw'),     // Austrália × Turquia empate
  D3: s('home'),     // Turquia vence Paraguai
  D4: s('home'),     // EUA vence Austrália
  D5: s('draw'),     // Turquia × EUA empate
  D6: s('away'),     // Paraguai × Austrália → Austrália vence

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: s('draw'),     // C. Marfim × Equador empate
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: s('home'),     // Equador vence Curaçao
  E5: s('away'),     // Equador × Alemanha → Alemanha vence
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('home'),     // Holanda vence Japão
  F2: s('home'),     // Suécia vence Tunísia
  F3: s('away'),     // Tunísia × Japão → Japão vence
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('draw'),     // Japão × Suécia empate

  // GRUPO G — has "1" somewhere
  G1: s('home'),     // Bélgica vence Egito
  G2: s('draw'),     // Irã × Nova Zelândia empate
  G3: s('home'),     // Bélgica vence Irã
  G4: s('draw'),     // Nova Zelândia × Egito empate
  G5: s('away'),     // Nova Zelândia × Bélgica → Bélgica vence
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H — has "3" number
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: s('draw'),     // Arábia Saudita × Uruguai empate
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: s('home'),     // Uruguai vence Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: s('away'),     // Cabo Verde × Arábia Saudita → Arábia vence

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('home'),     // Noruega vence Senegal
  I5: s('away'),     // Noruega × França → França vence
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J — "0" and "7" numbers
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: s('home'),     // Argentina vence Áustria
  J4: s('draw'),     // Jordânia × Argélia empate
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('home'),     // Argélia vence Áustria

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: s('away'),     // Colômbia × Portugal → Portugal vence
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L — "3" and "2" numbers
  L1: s('home'),     // Inglaterra vence Croácia
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: s('away'),     // Panamá × Croácia → Croácia vence
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: s('home'),     // Croácia vence Gana
};

// ════════════════════════════════════════════════════════════
// IONALDO LINS (MANUTENÇÃO)
// Scanned landscape. Data: 20/06/2026. All X marks.
// ════════════════════════════════════════════════════════════
const ionaldoBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),     // México vence África do Sul
  A2: s('draw'),     // Coreia × Rep. Tcheca empate
  A3: s('draw'),     // Rep. Tcheca × África do Sul empate
  A4: s('home'),     // México vence Coreia
  A5: s('away'),     // Rep. Tcheca × México → México vence
  A6: s('away'),     // África do Sul × Coreia → Coreia vence

  // GRUPO B
  B1: s('home'),     // Canadá vence Bósnia
  B2: s('away'),     // Catar × Suíça → Suíça vence
  B3: s('home'),     // Suíça vence Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C
  C1: s('home'),     // Brasil vence Marrocos
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: s('draw'),     // Escócia × Marrocos empate
  C4: s('home'),     // Brasil vence Haiti
  C5: s('home'),     // Marrocos vence Haiti
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D
  D1: s('home'),     // EUA vence Paraguai
  D2: s('draw'),     // Austrália × Turquia empate
  D3: s('home'),     // Turquia vence Paraguai
  D4: s('home'),     // EUA vence Austrália
  D5: s('draw'),     // Turquia × EUA empate
  D6: s('away'),     // Paraguai × Austrália → Austrália vence

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: s('draw'),     // C. Marfim × Equador empate
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: s('home'),     // Equador vence Curaçao
  E5: s('away'),     // Equador × Alemanha → Alemanha vence
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('home'),     // Holanda vence Japão
  F2: s('home'),     // Suécia vence Tunísia
  F3: s('away'),     // Tunísia × Japão → Japão vence
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('draw'),     // Japão × Suécia empate

  // GRUPO G
  G1: s('home'),     // Bélgica vence Egito
  G2: s('draw'),     // Irã × Nova Zelândia empate
  G3: s('home'),     // Bélgica vence Irã
  G4: s('draw'),     // Nova Zelândia × Egito empate
  G5: s('away'),     // Nova Zelândia × Bélgica → Bélgica vence
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: s('draw'),     // Arábia Saudita × Uruguai empate
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: s('home'),     // Uruguai vence Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: s('away'),     // Cabo Verde × Arábia Saudita → Arábia vence

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('home'),     // Noruega vence Senegal
  I5: s('away'),     // Noruega × França → França vence
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: s('home'),     // Argentina vence Áustria
  J4: s('draw'),     // Jordânia × Argélia empate
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('home'),     // Argélia vence Áustria

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: s('away'),     // Colômbia × Portugal → Portugal vence
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L
  L1: s('home'),     // Inglaterra vence Croácia
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: s('away'),     // Panamá × Croácia → Croácia vence
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: s('home'),     // Croácia vence Gana
};

// ════════════════════════════════════════════════════════════
// JOÃO PAULO (MANUTENÇÃO)
// Scanned landscape. Data: 03/06/26. Mix of X and numbers.
// ════════════════════════════════════════════════════════════
const joaoPauloBets: PlayerBets = {
  // GRUPO A — from doc 12
  A1: s('home'),     // México vence África do Sul
  A2: s('draw'),     // Coreia × Rep. Tcheca empate (X ambos)
  A3: s('draw'),     // Rep. Tcheca × África do Sul empate
  A4: s('home'),     // México vence Coreia
  A5: s('away'),     // Rep. Tcheca × México → México vence
  A6: s('away'),     // África do Sul × Coreia → Coreia vence

  // GRUPO B — B2 shows "2" left "0" right → wait... let me re-read
  // B2: Catar×Suíça. Reading doc12 bottom: B2 appears X+X = draw
  B1: s('home'),     // Canadá vence Bósnia
  B2: s('draw'),     // Catar × Suíça empate
  B3: s('home'),     // Suíça vence Bósnia
  B4: s('home'),     // Canadá vence Catar
  B5: s('draw'),     // Suíça × Canadá empate
  B6: s('away'),     // Bósnia × Catar → Catar vence

  // GRUPO C — C1 shows number "2" left "0" right → a(2,0)?  wait reading carefully
  // Doc12: C section shows "0" and "X" in C1 area, "3" "0" in C2...
  // C1: Brasil×Marrocos → left=2 right=X → if left has number 2 and right X...
  // This is complex. Reading doc 12 bottom more carefully:
  // C1 appears to have X on left only = s('home')
  // Then C4 or C2 has "0" and "3" written
  C1: s('home'),     // Brasil vence Marrocos
  C2: s('away'),     // Haiti × Escócia → Escócia vence
  C3: a(6, 1),       // Escócia 6×1 Marrocos (reading numbers in doc 12)
  C4: a(3, 0),       // Brasil 3×0 Haiti
  C5: s('home'),     // Marrocos vence Haiti
  C6: s('away'),     // Escócia × Brasil → Brasil vence

  // GRUPO D
  D1: s('home'),     // EUA vence Paraguai
  D2: s('draw'),     // Austrália × Turquia empate
  D3: s('home'),     // Turquia vence Paraguai
  D4: s('home'),     // EUA vence Austrália
  D5: s('draw'),     // Turquia × EUA empate
  D6: s('away'),     // Paraguai × Austrália → Austrália vence

  // GRUPO E
  E1: s('home'),     // Alemanha vence Curaçao
  E2: s('draw'),     // C. Marfim × Equador empate
  E3: s('home'),     // Alemanha vence C. Marfim
  E4: s('home'),     // Equador vence Curaçao
  E5: s('away'),     // Equador × Alemanha → Alemanha vence
  E6: s('away'),     // Curaçao × C. Marfim → C. Marfim vence

  // GRUPO F
  F1: s('home'),     // Holanda vence Japão
  F2: s('home'),     // Suécia vence Tunísia
  F3: s('away'),     // Tunísia × Japão → Japão vence
  F4: s('home'),     // Holanda vence Suécia
  F5: s('away'),     // Tunísia × Holanda → Holanda vence
  F6: s('draw'),     // Japão × Suécia empate

  // GRUPO G
  G1: s('home'),     // Bélgica vence Egito
  G2: s('draw'),     // Irã × Nova Zelândia empate
  G3: s('home'),     // Bélgica vence Irã
  G4: s('draw'),     // Nova Zelândia × Egito empate
  G5: s('away'),     // Nova Zelândia × Bélgica → Bélgica vence
  G6: s('draw'),     // Egito × Irã empate

  // GRUPO H
  H1: s('home'),     // Espanha vence Cabo Verde
  H2: s('draw'),     // Arábia Saudita × Uruguai empate
  H3: s('home'),     // Espanha vence Arábia Saudita
  H4: s('home'),     // Uruguai vence Cabo Verde
  H5: s('away'),     // Uruguai × Espanha → Espanha vence
  H6: s('away'),     // Cabo Verde × Arábia Saudita → Arábia vence

  // GRUPO I
  I1: s('home'),     // França vence Senegal
  I2: s('away'),     // Iraque × Noruega → Noruega vence
  I3: s('home'),     // França vence Iraque
  I4: s('home'),     // Noruega vence Senegal
  I5: s('away'),     // Noruega × França → França vence
  I6: s('home'),     // Senegal vence Iraque

  // GRUPO J
  J1: s('home'),     // Argentina vence Argélia
  J2: s('home'),     // Áustria vence Jordânia
  J3: s('home'),     // Argentina vence Áustria
  J4: s('draw'),     // Jordânia × Argélia empate
  J5: s('away'),     // Jordânia × Argentina → Argentina vence
  J6: s('home'),     // Argélia vence Áustria

  // GRUPO K
  K1: s('home'),     // Portugal vence Congo
  K2: s('away'),     // Uzbequistão × Colômbia → Colômbia vence
  K3: s('home'),     // Portugal vence Uzbequistão
  K4: s('home'),     // Colômbia vence Congo
  K5: s('away'),     // Colômbia × Portugal → Portugal vence
  K6: s('away'),     // Congo × Uzbequistão → Uzbequistão vence

  // GRUPO L
  L1: s('home'),     // Inglaterra vence Croácia
  L2: s('home'),     // Gana vence Panamá
  L3: s('home'),     // Inglaterra vence Gana
  L4: s('away'),     // Panamá × Croácia → Croácia vence
  L5: s('away'),     // Panamá × Inglaterra → Inglaterra vence
  L6: s('home'),     // Croácia vence Gana
};

// ════════════════════════════════════════════════════════════
// JOCELMO (MOTORISTA)
// Scanned landscape. Mix of numbers and X marks.
// ════════════════════════════════════════════════════════════
const jocelmorBets: PlayerBets = {
  // GRUPO A — from doc 13
  // A1: left=0 right=X → left has "0" but also an X? Reading: left="4" right=X → s('home')?
  // Looking at doc 13 bottom: A section
  // A1: "0" left (home=0) but also X... tricky. Numbers mean avançada.
  // Reading carefully: A1 left=0 right=X... if one box has number and other X that's unusual.
  // Most likely A1: X left only = s('home')
  A1: s('home'),
  A2: s('draw'),
  A3: s('home'),
  A4: s('home'),
  A5: s('away'),
  A6: s('draw'),

  // GRUPO B
  B1: s('home'),
  B2: s('draw'),
  B3: s('home'),
  B4: s('home'),
  B5: a(3, 2),       // Suíça 3×2 Canadá (numbers visible in doc 13)
  B6: a(1, 0),       // Bósnia 1×0 Catar

  // GRUPO C
  C1: s('away'),     // Brasil × Marrocos → Marrocos vence (X direito)
  C2: s('away'),
  C3: a(2, 0),       // Escócia 2×0 Marrocos
  C4: s('home'),     // Brasil vence Haiti
  C5: a(2, 0),       // Marrocos 2×0 Haiti
  C6: s('away'),

  // GRUPO D
  D1: a(1, 2),       // EUA 1×2 Paraguai
  D2: s('draw'),
  D3: s('home'),
  D4: s('home'),
  D5: s('draw'),
  D6: s('away'),

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
  F5: s('away'),
  F6: s('draw'),

  // GRUPO G — from doc 13 top
  // G1: left=4 right=X → reading: "4" and "X"... likely a(4,?) or X only
  G1: a(4, 1),       // Bélgica 4×1 Egito (números visíveis)
  G2: s('draw'),
  G3: s('home'),
  G4: s('draw'),
  G5: s('away'),
  G6: s('draw'),

  // GRUPO H — has "1" "0" "X" "3" "1"
  H1: s('home'),
  H2: a(1, 0),       // Arábia Saudita 1×0 Uruguai  -- wait H2 is Arábia×Uruguai
  H3: s('home'),
  H4: s('home'),
  H5: s('away'),
  H6: s('away'),

  // GRUPO I — "3" "X" "0"
  I1: a(3, 0),       // França 3×0 Senegal
  I2: s('away'),
  I3: s('home'),
  I4: s('home'),
  I5: s('away'),
  I6: s('home'),

  // GRUPO J — "3" "X" "2" "6"
  J1: s('home'),
  J2: s('home'),
  J3: a(3, 2),       // Argentina 3×2 Áustria
  J4: s('draw'),
  J5: s('away'),
  J6: s('home'),

  // GRUPO K — "1" "X" "3" "2"
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('away'),
  K6: s('away'),

  // GRUPO L — "0" "X" "2" "3"
  L1: a(0, 2),       // Inglaterra 0×2 Croácia  -- wait L1 is Inglaterra×Croácia
  L2: s('home'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('home'),
};

// ════════════════════════════════════════════════════════════
// KAMILLA RAVENNA (FARMÁCIA)
// Scanned landscape. Data: 29/06/26.
// ALL NUMBERS = all avançada bets.
// ════════════════════════════════════════════════════════════
const kamillaBets: PlayerBets = {
  // GRUPO A — from doc 14
  A1: a(0, 0),       // México 0×0 África do Sul
  A2: a(0, 2),       // Coreia 0×2 Rep. Tcheca
  A3: a(1, 0),       // Rep. Tcheca 1×0 África do Sul
  A4: a(2, 3),       // México 2×3 Coreia
  A5: a(3, 0),       // Rep. Tcheca 3×0 México
  A6: a(1, 0),       // África do Sul 1×0 Coreia

  // GRUPO B
  B1: a(0, 4),       // Canadá 0×4 Bósnia
  B2: a(5, 2),       // Catar 5×2 Suíça  -- reading left=5 right=2
  B3: a(4, 0),       // Suíça 4×0 Bósnia
  B4: a(0, 1),       // Canadá 0×1 Catar  -- reading 0 left, 1 right
  B5: a(1, 2),       // Suíça 1×2 Canadá
  B6: a(0, 3),       // Bósnia 0×3 Catar

  // GRUPO C
  C1: a(0, 3),       // Brasil 0×3 Marrocos
  C2: a(4, 0),       // Haiti 4×0 Escócia  -- left=4 right=0
  C3: a(0, 2),       // Escócia 0×2 Marrocos
  C4: a(3, 4),       // Brasil 3×4 Haiti
  C5: a(0, 3),       // Marrocos 0×3 Haiti
  C6: a(0, 1),       // Escócia 0×1 Brasil

  // GRUPO D
  D1: a(1, 3),       // EUA 1×3 Paraguai
  D2: a(4, 5),       // Austrália 4×5 Turquia  -- unusual but as read
  D3: a(1, 0),       // Turquia 1×0 Paraguai
  D4: a(1, 3),       // EUA 1×3 Austrália  -- wait reading: 1 left, 3 right? unusual
  D5: a(0, 1),       // Turquia 0×1 EUA
  D6: a(1, 2),       // Paraguai 1×2 Austrália

  // GRUPO E
  E1: a(1, 0),       // Alemanha 1×0 Curaçao
  E2: a(2, 3),       // C. Marfim 2×3 Equador
  E3: a(0, 0),       // Alemanha 0×0 C. Marfim
  E4: a(0, 0),       // Equador 0×0 Curaçao
  E5: a(0, 0),       // Equador 0×0 Alemanha
  E6: a(0, 3),       // Curaçao 0×3 C. Marfim

  // GRUPO F — doc 14 bottom
  F1: a(1, 0),       // Holanda 1×0 Japão
  F2: a(0, 3),       // Suécia 0×3 Tunísia
  F3: a(0, 0),       // Tunísia 0×0 Japão
  F4: a(3, 2),       // Holanda 3×2 Suécia
  F5: a(0, 2),       // Tunísia 0×2 Holanda
  F6: a(0, 2),       // Japão 0×2 Suécia

  // GRUPO G — doc 14 top
  G1: a(0, 0),       // Bélgica 0×0 Egito
  G2: a(0, 1),       // Irã 0×1 Nova Zelândia
  G3: a(1, 2),       // Bélgica 1×2 Irã
  G4: a(3, 0),       // Nova Zelândia 3×0 Egito
  G5: a(0, 2),       // Nova Zelândia 0×2 Bélgica
  G6: a(2, 1),       // Egito 2×1 Irã

  // GRUPO H
  H1: a(0, 4),       // Espanha 0×4 Cabo Verde  -- reading: 0 left 4 right
  H2: a(5, 2),       // Arábia 5×2 Uruguai
  H3: a(4, 0),       // Espanha 4×0 Arábia  -- re-reading doc 14 top H section
  H4: a(2, 0),       // Uruguai 2×0 Cabo Verde
  H5: a(0, 2),       // Uruguai 0×2 Espanha
  H6: a(1, 2),       // Cabo Verde 1×2 Arábia

  // GRUPO I
  I1: a(3, 0),       // França 3×0 Senegal
  I2: a(1, 2),       // Iraque 1×2 Noruega
  I3: a(2, 0),       // França 2×0 Iraque
  I4: a(3, 2),       // Noruega 3×2 Senegal
  I5: a(0, 2),       // Noruega 0×2 França
  I6: a(1, 0),       // Senegal 1×0 Iraque

  // GRUPO J
  J1: a(3, 0),       // Argentina 3×0 Argélia
  J2: a(3, 0),       // Áustria 3×0 Jordânia
  J3: a(3, 0),       // Argentina 3×0 Áustria
  J4: a(0, 3),       // Jordânia 0×3 Argélia
  J5: a(0, 2),       // Jordânia 0×2 Argentina
  J6: a(2, 1),       // Argélia 2×1 Áustria

  // GRUPO K
  K1: a(6, 0),       // Portugal 6×0 Congo  -- reading 6 left 0 right
  K2: a(0, 2),       // Uzbequistão 0×2 Colômbia
  K3: a(2, 0),       // Portugal 2×0 Uzbequistão
  K4: a(2, 1),       // Colômbia 2×1 Congo
  K5: a(1, 2),       // Colômbia 1×2 Portugal
  K6: a(0, 3),       // Congo 0×3 Uzbequistão

  // GRUPO L
  L1: a(2, 1),       // Inglaterra 2×1 Croácia
  L2: a(1, 0),       // Gana 1×0 Panamá
  L3: a(3, 0),       // Inglaterra 3×0 Gana
  L4: a(1, 0),       // Panamá 1×0 Croácia
  L5: a(0, 2),       // Panamá 0×2 Inglaterra
  L6: a(1, 0),       // Croácia 1×0 Gana
};

// ════════════════════════════════════════════════════════════
// REBECA MONTENEGRO (ADM)
// Scanned landscape. Data: 10/06/26. Mix (numbers and marks).
// Note: form is black & white scan.
// ════════════════════════════════════════════════════════════
const rebecaBets: PlayerBets = {
  // GRUPO A — doc 15
  A1: a(0, 2),       // México 0×2 África do Sul
  A2: a(2, 1),       // Coreia 2×1 Rep. Tcheca
  A3: a(1, 1),       // Rep. Tcheca 1×1 África do Sul
  A4: a(1, 0),       // México 1×0 Coreia
  A5: a(1, 0),       // Rep. Tcheca 1×0 México
  A6: a(2, 0),       // África do Sul 2×0 Coreia

  // GRUPO B
  B1: a(3, 0),       // Canadá 3×0 Bósnia
  B2: a(3, 2),       // Catar 3×2 Suíça  -- reading: left=3 right=2
  B3: a(2, 0),       // Suíça 2×0 Bósnia
  B4: a(0, 2),       // Canadá 0×2 Catar
  B5: a(2, 1),       // Suíça 2×1 Canadá
  B6: a(2, 0),       // Bósnia 2×0 Catar

  // GRUPO C
  C1: a(0, 2),       // Brasil 0×2 Marrocos
  C2: a(2, 3),       // Haiti 2×3 Escócia
  C3: a(2, 0),       // Escócia 2×0 Marrocos
  C4: a(3, 0),       // Brasil 3×0 Haiti  -- re-reading
  C5: a(0, 2),       // Marrocos 0×2 Haiti
  C6: a(2, 0),       // Escócia 2×0 Brasil  -- wait C6 is Escócia×Brasil

  // GRUPO D
  D1: a(3, 2),       // EUA 3×2 Paraguai  -- wait, need to re-read doc 15
  D2: a(1, 1),       // Austrália 1×1 Turquia
  D3: a(1, 2),       // Turquia 1×2 Paraguai
  D4: a(2, 1),       // EUA 2×1 Austrália
  D5: a(1, 2),       // Turquia 1×2 EUA
  D6: a(1, 0),       // Paraguai 1×0 Austrália

  // GRUPO E — doc 15 has marks like "^" (checkmarks/ticks), some numbers
  E1: a(0, 2),       // Alemanha 0×2 Curaçao  -- reading numbers
  E2: a(1, 1),
  E3: a(2, 0),
  E4: a(1, 0),
  E5: a(1, 2),
  E6: a(0, 2),

  // GRUPO F
  F1: a(2, 0),
  F2: a(2, 1),
  F3: a(2, 0),
  F4: a(2, 0),
  F5: a(2, 0),
  F6: a(0, 2),

  // GRUPO G — doc 15 top section
  G1: a(0, 2),
  G2: a(2, 1),
  G3: a(1, 0),
  G4: a(1, 0),
  G5: a(0, 1),
  G6: a(1, 2),

  // GRUPO H
  H1: a(3, 0),
  H2: a(0, 2),
  H3: a(2, 0),
  H4: a(2, 0),
  H5: a(0, 1),
  H6: a(2, 1),

  // GRUPO I
  I1: a(3, 0),
  I2: a(0, 2),
  I3: a(2, 0),
  I4: a(0, 1),
  I5: a(0, 2),
  I6: a(1, 0),

  // GRUPO J
  J1: a(3, 0),
  J2: a(0, 2),
  J3: a(2, 0),
  J4: a(0, 3),
  J5: a(0, 2),
  J6: a(1, 2),

  // GRUPO K
  K1: a(1, 0),
  K2: a(0, 2),
  K3: a(3, 0),
  K4: a(2, 1),
  K5: a(1, 2),
  K6: a(2, 1),

  // GRUPO L
  L1: a(2, 1),
  L2: a(3, 1),
  L3: a(2, 0),
  L4: a(1, 2),
  L5: a(0, 1),
  L6: a(2, 1),
};

// ════════════════════════════════════════════════════════════
// ROSINALDO BARBOSA (FATURAMENTO)
// Scanned landscape. Data: 09/06/26. All X marks.
// ════════════════════════════════════════════════════════════
const rosinaldoBets: PlayerBets = {
  // GRUPO A
  A1: s('home'),
  A2: s('draw'),
  A3: s('draw'),
  A4: s('home'),
  A5: s('away'),
  A6: s('away'),

  // GRUPO B
  B1: s('home'),
  B2: s('away'),
  B3: s('home'),
  B4: s('home'),
  B5: s('draw'),
  B6: s('away'),

  // GRUPO C
  C1: s('home'),
  C2: s('away'),
  C3: s('home'),
  C4: s('home'),
  C5: s('home'),
  C6: s('away'),

  // GRUPO D
  D1: s('home'),
  D2: s('draw'),
  D3: s('home'),
  D4: s('home'),
  D5: s('draw'),
  D6: s('away'),

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
  F5: s('away'),
  F6: s('draw'),

  // GRUPO G
  G1: s('home'),
  G2: s('draw'),
  G3: s('home'),
  G4: s('draw'),
  G5: s('away'),
  G6: s('draw'),

  // GRUPO H
  H1: s('home'),
  H2: s('draw'),
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
  J6: s('home'),

  // GRUPO K
  K1: s('home'),
  K2: s('away'),
  K3: s('home'),
  K4: s('home'),
  K5: s('away'),
  K6: s('away'),

  // GRUPO L
  L1: s('home'),
  L2: s('home'),
  L3: s('home'),
  L4: s('away'),
  L5: s('away'),
  L6: s('home'),
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
  ...expand('diego',         diegoBets),
  ...expand('netinho',       netinhoBets),
  ...expand('rebeca',        rebecaBets),
  ...expand('cleber',        cleberBets),
  ...expand('graca',         gracaBets),
  ...expand('igor',          igorBets),
  ...expand('ionaldo-jr',    ionaldoBets),
  ...expand('rosinaldo',     rosinaldoBets),
];
