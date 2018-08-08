import { PlayerGameLogResponse, Team, Game } from './player-game-log-response';
import { from } from 'rxjs';
import { find } from 'rxjs/operators';

export interface MvpGameLogItem {
  date: Date;
  isHomeGame: boolean;
  team_outcome: string;
  team_score: number;
  opponent_score: number;
  opponent_name: string;
  opponent_nickname: string;
  opponent_abbr: string;
  atBats: number;
  hits: number;
  doubles: number;
  triples: number;
  runs: number;
  homeRuns: number;
  strikeouts: number;
  walks: number;
  opponent: Team;
  gameResults: Game;
}

export class MvpGameLogItems {
  game_log: MvpGameLogItem[] = [];
  team: Team;
  opposing_teams: Team[];
  games: Game[];


  constructor(private playerGameLogResponse: PlayerGameLogResponse) {
    this.team = playerGameLogResponse.teams[0];
    this.opposing_teams = playerGameLogResponse.opponents;
    this.games = playerGameLogResponse.games;

    playerGameLogResponse.game_logs.forEach(gameLog => {
      const logItem = this.buildMvpGameLogItem(gameLog);
      this.game_log.push(logItem);
    });
  }

  private buildMvpGameLogItem(playerGameLog): MvpGameLogItem {
    const opponentInfo = this.opposing_teams.find(oppenentsObj => playerGameLog.opponent_id === oppenentsObj.id);
    const gameInfo = this.games.find(gameObj => playerGameLog.game_id === gameObj.id);
    const isHomeGame = playerGameLog.is_home_team;
    const mvpGamelogItem: MvpGameLogItem = {
      date: gameInfo.started_at,
      isHomeGame: isHomeGame,
      team_outcome: isHomeGame ? playerGameLog.home_team_outcome : playerGameLog.away_team_outcome,
      team_score: isHomeGame ? playerGameLog.home_team_score : playerGameLog.away_team_score,
      opponent_score: isHomeGame ? playerGameLog.away_team_score : playerGameLog.home_team_score,
      opponent_name: opponentInfo.name,
      opponent_nickname: opponentInfo.nickname,
      opponent_abbr: opponentInfo.abbreviation,
      atBats: playerGameLog.at_bats,
      hits: playerGameLog.hits,
      doubles: playerGameLog.doubles,
      triples: playerGameLog.triples,
      runs: playerGameLog.runs,
      homeRuns: playerGameLog.home_runs,
      strikeouts: playerGameLog.strikeouts,
      walks: playerGameLog.walks,
      opponent: opponentInfo,
      gameResults: gameInfo
    };
    return mvpGamelogItem;
  }

}
