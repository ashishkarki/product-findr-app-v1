import { Product } from './../../shared/product';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  searchedProducts: Product[];
  searchText = 'type your search text here';
  displayedColumns = ['id', 'description', 'lastSold', 'shelfLife', 'department', 'price', 'unit', 'xFor', 'cost'];

  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  onSearchAction(searchText: string) {
    this.restApiService.getSearchedProducts(searchText).subscribe(searchedProducts => {
      this.searchedProducts = searchedProducts;
    });
  }

  private getAllProducts() {
    this.restApiService.getAllProducts().subscribe(products => {
      this.searchedProducts = products;
    });
  }
}
