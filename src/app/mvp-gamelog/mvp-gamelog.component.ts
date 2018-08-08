import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MvpGamelogDataSource } from './mvp-gamelog-datasource';
import { PlayerGameLogService  } from '../player-game-log.service';

@Component({
  selector: 'mvp-gamelog',
  templateUrl: './mvp-gamelog.component.html',
  styleUrls: ['./mvp-gamelog.component.css']
})
export class MvpGamelogComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MvpGamelogDataSource;

  constructor(private playerGameLogService: PlayerGameLogService) { }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'opponent', 'results', 'atBats', 'hits', 'doubles', 'triples', 'homeruns', 'walks', 'strikeouts'];

  ngOnInit() {
    this.dataSource = new MvpGamelogDataSource(this. playerGameLogService, this.paginator, this.sort);
  }
}
