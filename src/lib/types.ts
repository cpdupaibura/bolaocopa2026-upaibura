export type Group = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L';

export interface Team {
  id: string;
  name: string;
  flag: string;
  group: Group;
}

export interface Game {
  id: string;
  group: Group;
  round: 1 | 2 | 3;
  homeTeamId: string;
  awayTeamId: string;
  date: string; // 'YYYY-MM-DD'
  time?: string; // horário em Recife (BRT), ex: '16h00'
}

export interface Participant {
  id: string;
  name: string;
  label?: string;   // "Aposta 1", "Aposta 2" — para quem fez múltiplas fichas
  pdfFile?: string;
  avatarFile?: string;
}

export type BetOutcome = 'home' | 'away' | 'draw';

export interface SimpleBet {
  type: 'simple';
  outcome: BetOutcome;
}

export interface AdvancedBet {
  type: 'advanced';
  homeScore: number;
  awayScore: number;
}

export type Bet = SimpleBet | AdvancedBet;

export interface ParticipantBet {
  participantId: string;
  gameId: string;
  bet: Bet;
}

export interface GameResult {
  home: number;
  away: number;
}

export interface ParticipantScore {
  participant: Participant;
  points: number;
  simpleCorrect: number;
  advancedCorrect: number;
  gamesWithBets: number;
}

export type KnockoutRound = 'r16' | 'qf' | 'sf' | 'semi' | 'tp' | 'final';

export interface KnockoutGame {
  id: string;
  round: KnockoutRound;
  date: string;
  time: string;
  homeLabel: string;
  awayLabel: string;
  homeTeamId?: string;
  awayTeamId?: string;
  homeSource?: string;
  awaySource?: string;
}

export interface KnockoutBet {
  participantId: string;
  gameId: string;
  pick: 'a' | 'b';
}

export interface KnockoutScore {
  participant: Participant;
  points: number;
  correct: number;
  total: number;
}
