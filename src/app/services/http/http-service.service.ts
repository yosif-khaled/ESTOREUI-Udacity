import { Injectable } from '@angular/core';
import { Observable, of, tap, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product-model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  products!: Product[];
  jsonURL: string = 'assets/data.json';

  constructor(
    private http: HttpClient,
    // private route: ActivatedRoute,
  ) { }

  getJSON(): Observable<Product[]> { return this.http.get<Product[]>(this.jsonURL); }

}

