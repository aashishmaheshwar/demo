import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() data;
  rows = [];
  headers = ['Model', 'RAM', 'HDD', 'Location', 'Price'];

  constructor() { }

  ngOnInit() {
    let singleRow = {};
    this.data['servers'].map(row => {
      singleRow[this.headers[0]] = row['model'];
      singleRow[this.headers[1]] = row['ram']['memory'] + row['ram']['unit'] + row['ram']['type'];
      singleRow[this.headers[2]] = row['hdd']['memory'] + 'x' + row['hdd']['count'] + row['hdd']['unit'] + row['hdd']['type'];
      singleRow[this.headers[3]] = row['location'];
      singleRow[this.headers[4]] = row['price']['currencySymbol'] + (row['price']['amountCents'] / 100);
      this.rows.push(singleRow);
      singleRow = {};
    });
  }

  ngOnChanges() {
    this.rows = [];
    let singleRow = {};
    this.data['servers'].map(row => {
      singleRow[this.headers[0]] = row['model'];
      singleRow[this.headers[1]] = row['ram']['memory'] + row['ram']['unit'] + row['ram']['type'];
      singleRow[this.headers[2]] = row['hdd']['memory'] + 'x' + row['hdd']['count'] + row['hdd']['unit'] + row['hdd']['type'];
      singleRow[this.headers[3]] = row['location'];
      singleRow[this.headers[4]] = row['price']['currencySymbol'] + (row['price']['amountCents'] / 100);
      this.rows.push(singleRow);
      singleRow = {};
    });
  }

}
