import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  isEmpty!: boolean;
  message!: string;
  total: number = 0;

  constructor(
    private cartService: CartService,
  ) {
    // this.isEmpty = this.cartService.isCartEmpty();
   }

  receiveMesssage($event: string) {
    this.message = $event;
    console.log(this.message);

    this.isEmpty = this.cartService.isCartEmpty();
    console.log( '2: ' + this.isEmpty);
  }

  ngOnInit(): void {
    this.isEmpty = this.cartService.isCartEmpty();
  }

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
    this.cartService.removeFromCart(product, this.isEmpty);
    alert(`${product.name} has been removed from cart`);
  }
}
