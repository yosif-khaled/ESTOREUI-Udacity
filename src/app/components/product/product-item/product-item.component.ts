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

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to cart');
  }

}
