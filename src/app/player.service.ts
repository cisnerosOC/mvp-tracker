import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url = 'https://api.stattleship.com/baseball/mlb/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token token=1552f16a9862adb8cfeb9a1b1eed3893',
      'Accept': 'application/vnd.stattleship.com; version=1'
    })
  };
  constructor(private http: HttpClient) { }

  getPlayer(): Observable<any> {
    const playerUrl = this.url + 'players';
    const params = new HttpParams().set('player_id', 'mlb-javier-baez').set('season_id', 'mlb-2018');
    const httpOptions = { ...this.httpOptions, params };

    return this.http.get<any>(playerUrl, httpOptions);
  }

  getPlayerLog(): Observable<any> {
    const playerLogUrl = this.url + 'game_logs';
    const params = new HttpParams()
      .set('player_id', 'mlb-javier-baez')
      .set('season_id', 'mlb-2018')
      .set('status', 'ended');
    const httpOptions = { ...this.httpOptions, ...params };
    return this.http.get<any>(playerLogUrl, httpOptions);
  }

  getPlayerStats(): Observable<any> {

    const playerSeasonStatsUrl = this.url + 'player_season_stats';
    const params = new HttpParams()
      .set('player_id', 'mlb-javier-baez')
      .set('season_id', 'mlb-2018')
      .set('on', 'Today');

    const httpOptions = { ...this.httpOptions, ...params };

    return this.http.get<any>(playerSeasonStatsUrl, httpOptions);
  }
}






