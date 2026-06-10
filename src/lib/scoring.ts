import { Bet, BetOutcome, GameResult, Participant, ParticipantBet, ParticipantScore } from './types';

export function getOutcome(home: number, away: number): BetOutcome {
  if (home > away) return 'home';
  if (away > home) return 'away';
  return 'draw';
}

export function calculatePoints(bet: Bet, result: GameResult): number {
  if (bet.type === 'simple') {
    return bet.outcome === getOutcome(result.home, result.away) ? 1 : 0;
  }
  return bet.homeScore === result.home && bet.awayScore === result.away ? 3 : 0;
}

export function calculateLeaderboard(
  participants: Participant[],
  bets: ParticipantBet[],
  results: Record<string, GameResult>
): ParticipantScore[] {
  return participants
    .map((participant) => {
      const pBets = bets.filter((b) => b.participantId === participant.id);
      let points = 0;
      let simpleCorrect = 0;
      let advancedCorrect = 0;

      for (const pb of pBets) {
        const result = results[pb.gameId];
        if (!result) continue;
        const pts = calculatePoints(pb.bet, result);
        points += pts;
        if (pts > 0) {
          if (pb.bet.type === 'simple') simpleCorrect++;
          else advancedCorrect++;
        }
      }

      return { participant, points, simpleCorrect, advancedCorrect, gamesWithBets: pBets.length };
    })
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return b.advancedCorrect - a.advancedCorrect;
    });
}

export function betLabel(bet: Bet, homeTeam: string, awayTeam: string): string {
  if (bet.type === 'advanced') {
    return `${homeTeam} ${bet.homeScore} × ${bet.awayScore} ${awayTeam}`;
  }
  if (bet.outcome === 'home') return `Vitória do ${homeTeam}`;
  if (bet.outcome === 'away') return `Vitória do ${awayTeam}`;
  return 'Empate';
}

export function displayName(p: Participant): string {
  return p.label ? `${p.name} – ${p.label}` : p.name;
}

export function outcomeLabel(outcome: BetOutcome, homeTeam: string, awayTeam: string): string {
  if (outcome === 'home') return `Vitória do ${homeTeam}`;
  if (outcome === 'away') return `Vitória do ${awayTeam}`;
  return 'Empate';
}
