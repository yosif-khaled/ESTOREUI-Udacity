import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  count: number = 1;
  price!: number;

  incrementQuantity(){
    this.count += 1;
    this.price = this.items[0].price;
    this.price *= this.count;
  }

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  // onSubmit(): void {
  //   console.warn('Your Order Has Been Submitted', this.checkoutForm.value);
  //   this.items = this.cartService.clearItems();
  //   this.checkoutForm.reset();
  // }
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
