import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Product, products } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  constructor(
    private http: HttpClient,
  ) { }
  
}
