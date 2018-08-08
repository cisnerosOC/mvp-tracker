import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MvpGamelogDataSource } from './mvp-gamelog-datasource';

@Component({
  selector: 'mvp-gamelog',
  templateUrl: './mvp-gamelog.component.html',
  styleUrls: ['./mvp-gamelog.component.css']
})
export class MvpGamelogComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MvpGamelogDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MvpGamelogDataSource(this.paginator, this.sort);
  }
}
