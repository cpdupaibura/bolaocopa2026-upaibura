const fs = require('fs');
const path = require('path');

function parseResults(filePath) {
  const txt = fs.readFileSync(filePath, 'utf8');
  const re = /'([A-Z0-9-]+)'\s*:\s*'([ab])'/g;
  const results = {};
  let m;
  while ((m = re.exec(txt))) {
    results[m[1]] = m[2];
  }
  return results;
}

function parseGames(filePath) {
  const txt = fs.readFileSync(filePath, 'utf8');
  const gameRe = /\{\s*id:\s*'([A-Z0-9-]+)'[\s\S]*?round:\s*'([a-z0-9]+)'[\s\S]*?\}/g;
  const games = {};
  let m;
  while ((m = gameRe.exec(txt))) {
    const block = m[0];
    const id = m[1];
    const round = m[2];
    const homeSource = (block.match(/homeSource:\s*'([A-Z0-9-]+)'/) || [])[1];
    const awaySource = (block.match(/awaySource:\s*'([A-Z0-9-]+)'/) || [])[1];
    games[id] = { id, round, homeSource, awaySource };
  }
  return games;
}

function parseBets(filePath) {
  const txt = fs.readFileSync(filePath, 'utf8');
  const re = /\{\s*participantId:\s*'([^']+)'\s*,\s*gameId:\s*'([^']+)'\s*,\s*pick:\s*'([ab])'\s*\}/g;
  const bets = [];
  let m;
  while ((m = re.exec(txt))) {
    bets.push({ participantId: m[1], gameId: m[2], pick: m[3] });
  }
  return bets;
}

function isConfrontoCorrect(gameId, betsMap, results, games) {
  const game = games[gameId];
  if (!game) return false;
  if (game.round === 'r16') return true;
  const h = game.homeSource;
  const a = game.awaySource;
  if (!h || !a) return false;
  if (results[h] === undefined || results[a] === undefined) return false;
  if (results[h] !== betsMap[h] || results[a] !== betsMap[a]) return false;
  return isConfrontoCorrect(h, betsMap, results, games) && isConfrontoCorrect(a, betsMap, results, games);
}

function calc(resultsFile, betsFile, gamesFile) {
  const results = parseResults(resultsFile);
  const bets = parseBets(betsFile);
  const games = parseGames(gamesFile);

  const participants = {};
  for (const b of bets) {
    participants[b.participantId] = participants[b.participantId] || { id: b.participantId, points: 0, correct: 0, total: 0 };
    participants[b.participantId].total++;
  }

  // build betsMap per participant
  const betsByParticipant = {};
  for (const b of bets) {
    betsByParticipant[b.participantId] = betsByParticipant[b.participantId] || {};
    betsByParticipant[b.participantId][b.gameId] = b.pick;
  }

  for (const pid of Object.keys(betsByParticipant)) {
    const betsMap = betsByParticipant[pid];
    for (const [gameId, pick] of Object.entries(betsMap)) {
      const result = results[gameId];
      if (!result) continue;
      if (!isConfrontoCorrect(gameId, betsMap, results, games)) continue;
      if (pick === result) {
        participants[pid].points++;
        participants[pid].correct++;
      }
    }
  }

  const list = Object.values(participants).sort((a, b) => b.points - a.points || b.correct - a.correct || a.id.localeCompare(b.id));
  return { results, leaderboard: list };
}

if (require.main === module) {
  const root = path.resolve(__dirname, '..');
  const resultsFile = path.join(root, 'src', 'data', 'knockout_results.ts');
  const betsFile = path.join(root, 'src', 'data', 'knockout_bets.ts');
  const gamesFile = path.join(root, 'src', 'data', 'knockout_games.ts');
  const { leaderboard } = calc(resultsFile, betsFile, gamesFile);
  console.log('Knockout leaderboard (points | correct | total | participantId)');
  leaderboard.forEach((p) => console.log(`${p.points} | ${p.correct} | ${p.total} | ${p.id}`));
}

module.exports = { calc };
