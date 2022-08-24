import { Component } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  total: number = 0;

  constructor(
    private cartService: CartService,
  ) { }

  incrementQuantity(item: Product){
    item.qnty! += 1;
  }
  decrementQuantity(item: Product){
    if (item.qnty! <= 1){
      this.removeFromCart(item);
      return;
    } else {
      item.qnty! -= 1;
    }  
  }

  calculateGrandTotal(): number {
    let grandTotal:number = 0;
    for(let item of this.items){
      grandTotal += (item.qnty! * item.price);
    }
    return grandTotal;
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  // onSubmit(): void {
  //   console.warn('Your Order Has Been Submitted', this.checkoutForm.value);
  //   this.items = this.cartService.clearItems();
  //   this.checkoutForm.reset();
  // }

}
