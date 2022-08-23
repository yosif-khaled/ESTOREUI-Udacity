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

  // these functions should be in the cart component
  removeFromCart(product: Product) {
    // will take time finish it last
    let index = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
  };

  clearItems() {
    this.items = [];
    return this.items;
  }

  returnTotalOfOneItem(id: number, quantity: number) {
    
  }

  returnTotalOfAllItems() {

  }

}
