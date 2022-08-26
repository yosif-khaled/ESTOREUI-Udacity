import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  isEmpty: boolean = this.cartService.isCartEmpty();
  message!: string;
  total: number = 0;

  constructor(
    private cartService: CartService,
    private cd: ChangeDetectorRef,
  ) {
    // this.isEmpty = this.cartService.isCartEmpty();
   }

  receiveMesssage($event: string) {
    this.message = $event;
    // console.log('1: ' + this.isEmpty);
    // this.isEmpty = this.cartService.isCartEmpty();
    // console.log( '2: ' + this.isEmpty);
  }

  ngOnInit(): void {
    console.log(`isEmpty in Init of Cart C 001: ${this.isEmpty}`)
    this.isEmpty = this.cartService.isCartEmpty();
    console.log(`isEmpty in Init of Cart C002: ${this.isEmpty}`)
  }

  ngDoCheck() {
    this.cd.detectChanges();
    console.log(`Do Check Cart-C003: ${this.isEmpty} , message: ${this.message}`);
  }

  incrementQuantity(item: Product){
    item.qnty! += 1;
  }
  decrementQuantity(item: Product){
    if (item.qnty! <= 1){
      this.removeFromCart(item);
      this.cartService.checkIfCartIsEmpty(this.items);
      this.isEmpty = this.cartService.isCartEmpty();
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
    this.cartService.checkIfCartIsEmpty(this.items);
    this.isEmpty = this.cartService.isCartEmpty();
    alert(`${product.name} has been removed from cart`);
  }
}
