import { Injectable } from '@angular/core';
import { CustomerData } from 'src/app/models/customer-model';
import { Product } from 'src/app/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  customerData!: CustomerData;
  cartIsEmpty: boolean = true;
  
  // Ask a senior whether to move these functions 
  // to the cart component or do the exact opposite
  // and move the functions in the component in the service

  checkIfCartIsEmpty() {
    if (this.items === []) {
      this.cartIsEmpty = true;
    } else this.cartIsEmpty = false;
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.checkIfCartIsEmpty();
  }

  removeFromCart(product: Product) {
    let index = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.checkIfCartIsEmpty();
  }

  getItems() {
    return this.items;
  };

  clearItems() {
    this.items = [];
    return this.items;
  }

  updateCustomerData(d: CustomerData) {
    this.customerData = d;
  }

  formData(): CustomerData {
    return this.customerData;
  }

}
