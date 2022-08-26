import { Component, OnInit } from '@angular/core';
import { CustomerData } from 'src/app/models/customer-model';
import { Product } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  customerData!: CustomerData;
  customerItems!: Product[];
  
  constructor(
    private cartService: CartService,
  ){ }

  ngOnInit(): void {
    // in case I wanted to display this data to the user
    this.customerData = this.cartService.customerData;
    // this.customerItems = this.cartService.getItems();
    this.cartService.clearItems();
  }

}
