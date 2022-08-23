import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product-model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  items: Product[] = [];

  private _jsonURL: string = 'assets/data.json';

  constructor(
    private http: HttpClient,
  ) { }

  getJSON(): Observable<any>{
    return this.http.get(this._jsonURL);
  }

  getProducts() {
    this.getJSON().subscribe(data => {
      this.items = data
      console.log(this.items);
  });
    return this.items;
  }
}
