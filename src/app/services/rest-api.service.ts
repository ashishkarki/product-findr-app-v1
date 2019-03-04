import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  readonly jsonServerUrl = 'http://localhost:3000';

  readonly httpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.getProductsRequest(this.jsonServerUrl + '/products');
  }

  getSearchedProducts(searchText: string): Observable<Product[]> {
    return this.getProductsRequest(this.jsonServerUrl + '/products?q=' + searchText.trim());
  }

  private getProductsRequest(url: string): Observable<Product[]> {
    return this.http.get<Product[]>(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
