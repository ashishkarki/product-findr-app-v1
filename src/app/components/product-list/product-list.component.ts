import { Product } from './../../shared/product';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  searchedProducts: Product[];
  searchText = 'type your search text here';

  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  onSearchButtonClicked() {
    this.restApiService.getSearchProducts(this.searchText).subscribe(searchedProducts => {
      this.searchedProducts = searchedProducts;
    });
  }

  private getAllProducts() {
    this.restApiService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}