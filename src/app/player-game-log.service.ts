import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { PlayerGameLogResponse} from './player-game-log-response';

@Injectable({
  providedIn: 'root'
})
export class PlayerGameLogService {
  url = 'https://api.stattleship.com/baseball/mlb/game_logs';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token token=1552f16a9862adb8cfeb9a1b1eed3893',
      'Accept': 'application/vnd.stattleship.com; version=1'
    }),
      params: new HttpParams()
        .set('player_id', 'mlb-javier-baez')
        .set('season_id', 'mlb-2018')
        .set('status', 'ended')
  };
  constructor(private http: HttpClient) { }

  getPlayerLog(): Observable<PlayerGameLogResponse> {
    // TODO:  Handle Pagination
    // const response2$ = this.setPlayerLogRequest(2);
    // const response3$ = this.setPlayerLogRequest(3);
    // const response4$ = this.setPlayerLogRequest(4);
    return this.setPlayerLogRequest(1);
  }

  private setPlayerLogRequest(page): Observable<PlayerGameLogResponse> {
    this.httpOptions.params.set('page', String(page));
    return this.http.get<PlayerGameLogResponse>(this.url, this.httpOptions);
  }
}
