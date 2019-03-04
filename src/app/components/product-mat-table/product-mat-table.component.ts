import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-mat-table',
  templateUrl: './product-mat-table.component.html',
  styleUrls: ['./product-mat-table.component.css']
})
export class ProductMatTableComponent implements OnInit {

  @Input()
  displayedColumns: string[];

  @Input()
  dataSource: any[];

  constructor() { }

  ngOnInit() {
    console.log('datasoruce: ' + this.dataSource)
  }

}
