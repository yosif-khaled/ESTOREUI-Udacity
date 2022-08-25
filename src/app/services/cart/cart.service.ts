import { Injectable } from '@angular/core';
import { CustomerData } from 'src/app/models/customer-model';
import { Product } from 'src/app/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  customerData!: CustomerData;
  
  // Ask a senior whether to move these functions 
  // to the cart component or do the exact opposite
  // and move the functions in the component in the service

  addToCart(product: Product) {
    this.items.push(product);
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

}
