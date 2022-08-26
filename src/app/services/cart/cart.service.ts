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

  checkIfCartIsEmpty(i: Product[]) {
    if (i.length == 0 || typeof i == undefined) {
      this.cartIsEmpty = true;
      console.log(`Cart cart-s001 ${this.cartIsEmpty}`);
    } else {
      this.cartIsEmpty = false;
      console.log(`Cart cart-s002 ${this.cartIsEmpty}`);
    }
  }

  isCartEmpty() : boolean{
    return this.cartIsEmpty;
  }
  

  addToCart(product: Product) {
    this.items.push(product);
    this.cartIsEmpty = false;
  }

  removeFromCart(product: Product) {
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

  updateCustomerData(d: CustomerData) {
    this.customerData = d;
  }

  formData(): CustomerData {
    return this.customerData;
  }

  // cartMessage(message: string) {
  //   if (this.cartIsEmpty == true) {
  //     message = 'Please Select at Least One product';
  //   } else {
  //     message = 'Good Choice of Products';
  //   }
  // }

}
