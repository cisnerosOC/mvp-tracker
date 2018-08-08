import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { PlayerGameLogService } from './player-game-log.service';

describe('PlayerGameLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerGameLogService],
      imports: [HttpClientTestingModule]
    });
  });

  it('expect service to fetch data with correct number of games',
    inject([HttpTestingController, PlayerGameLogService],
      (httpMock: HttpTestingController, service: PlayerGameLogService) => {
        service.getPlayerLog().subscribe(data => {
          expect(data.games).toBeGreaterThan(0);
        });

        const req = httpMock.expectOne('https://api.stattleship.com/baseball/mlb/game_logs');
        expect(req.request.method).toEqual('GET');


      })
    );

  it('should be created', inject([PlayerGameLogService], (service: PlayerGameLogService) => {
    expect(service).toBeTruthy();
  }));
});
