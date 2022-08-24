import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product-model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  products: Product[] = [];
  private _jsonURL: string = 'assets/data.json';

  constructor(
    private http: HttpClient,
  ) { }

  // these functions should be called asynchoronously

  getJSON(): Observable<any>{
    return this.http.get(this._jsonURL);
  }

  getProducts() {
    this.getJSON().subscribe(data => {
      this.products = data
      console.log(this.products);
  });
    return this.products;
  }

  // getProducts() {
  //   this.http.get<Product[]>(this._jsonURL).subscribe(
  //     data => this.products = data 
  //   );
  //   return this.products;
  // }
}

