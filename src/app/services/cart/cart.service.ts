import { identifierName, TemplateBindingParseResult } from '@angular/compiler';
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
  removeFromCart(id: number) {
    this.items.pop();
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
