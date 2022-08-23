import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    // this.items.pop(product);
  }

  getItems() {
    return this.items;
  };

  clearItems() {
    this.items = [];
    return this.items;
  }

  returnTotal() {}

}
