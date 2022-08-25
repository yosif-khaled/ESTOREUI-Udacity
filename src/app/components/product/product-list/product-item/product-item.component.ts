import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart/cart.service';
// import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('product') product!: Product;
  qnty: number = 1;
  
  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.product.qnty = this.qnty;
  }

  increment() {
    this.qnty++;
  }

  decrement() {
    if(this.qnty == 1 || this.qnty<= 0) this.qnty = 1;
    else this.qnty--;
  }

  addToCart(product: Product) {
    this.product.qnty = this.qnty;
    this.cartService.addToCart(product);
    window.alert('Your product has been added to cart');
  }

}
