import { KnockoutBet, KnockoutScore, Participant } from './types';
import { KNOCKOUT_GAMES_BY_ID } from '../data/knockout_games';
import { TEAMS } from '../data/teams';

/**
 * Verifica se o apostador acertou o confronto exato do jogo (ambas as seleções corretas).
 * Para R16, o confronto é sempre fixo → sempre verdadeiro.
 * Para OF em diante, o confronto é correto quando o apostador acertou
 * os vencedores dos jogos-fonte que definem esse confronto.
 */
export function isConfrontoCorrect(
  gameId: string,
  bets: Record<string, 'a' | 'b'>,
  results: Record<string, 'a' | 'b'>
): boolean {
  const game = KNOCKOUT_GAMES_BY_ID[gameId];
  if (!game) return false;
  if (game.round === 'r16') return true;

  const betPick = bets[gameId];
  const actualResult = results[gameId];
  if (!betPick || !actualResult) return false;
  if (betPick !== actualResult) return false;

  const sourceId = betPick === 'a' ? game.homeSource! : game.awaySource!;
  return results[sourceId] === bets[sourceId] && isConfrontoCorrect(sourceId, bets, results);
}

export function calculateKnockoutLeaderboard(
  participants: Participant[],
  bets: KnockoutBet[],
  results: Record<string, 'a' | 'b'>
): KnockoutScore[] {
  return participants
    .map((participant) => {
      const pBets = bets.filter((b) => b.participantId === participant.id);
      const betsMap = Object.fromEntries(pBets.map((b) => [b.gameId, b.pick])) as Record<string, 'a' | 'b'>;
      let points = 0;
      let correct = 0;
      for (const bet of pBets) {
        const result = results[bet.gameId];
        if (!result) continue;
        if (!isConfrontoCorrect(bet.gameId, betsMap, results)) continue;
        if (bet.pick === result) {
          points++;
          correct++;
        }
      }
      return { participant, points, correct, total: pBets.length };
    })
    .sort((a, b) => b.points - a.points);
}

/** Resolve o nome real de uma posição (a/b) num jogo, considerando resultados já conhecidos. */
export function resolveLabel(
  gameId: string,
  position: 'a' | 'b',
  results: Record<string, 'a' | 'b'>
): string {
  const game = KNOCKOUT_GAMES_BY_ID[gameId];
  if (!game) return '?';

  if (game.round === 'r16') {
    const teamId = position === 'a' ? game.homeTeamId : game.awayTeamId;
    if (!teamId) return position === 'a' ? game.homeLabel : game.awayLabel;
    return TEAMS[teamId]?.flag
      ? `${TEAMS[teamId].flag} ${TEAMS[teamId].name}`
      : TEAMS[teamId]?.name ?? (position === 'a' ? game.homeLabel : game.awayLabel);
  }

  const sourceId = position === 'a' ? game.homeSource : game.awaySource;
  if (!sourceId) return '?';

  const sourceResult = results[sourceId];
  if (!sourceResult) {
    const src = KNOCKOUT_GAMES_BY_ID[sourceId];
    return src ? (position === 'a' ? src.homeLabel : src.awayLabel) : '?';
  }

  return resolveLabel(sourceId, sourceResult, results);
}

/** Retorna o time vencedor de um jogo (ou undefined se ainda não jogado). */
export function getWinner(
  gameId: string,
  results: Record<string, 'a' | 'b'>
): 'a' | 'b' | undefined {
  return results[gameId];
}

/** Retorna a flag+nome de um time de R16 */
export function teamDisplay(teamId: string | undefined): string {
  if (!teamId) return '?';
  const t = TEAMS[teamId];
  return t ? `${t.flag} ${t.name}` : teamId;
}
