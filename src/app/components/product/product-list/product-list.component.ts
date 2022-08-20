import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Product, products } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [...products];

  constructor(
    private http: HttpClient,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  share() {
    // make it a pop up
    window.alert('Thank you for sharing our products :D');
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to cart');
  }

  // add remove from cart functionality

}
