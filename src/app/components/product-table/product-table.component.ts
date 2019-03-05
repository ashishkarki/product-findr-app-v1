import { Product } from './../../shared/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input()
  displayedColumns: string[];

  @Input()
  dataSource: Product[];

  constructor() { }

  ngOnInit() {
  }

}
