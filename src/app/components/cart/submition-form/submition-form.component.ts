import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerData } from 'src/app/models/customer-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-submition-form',
  templateUrl: './submition-form.component.html',
  styleUrls: ['./submition-form.component.css']
})

export class SubmitionFormComponent {

  constructor(
    private route: Router,
    private cartService: CartService,
  ) { }

  customerData: CustomerData = {
    name: 'John Doe',
    email: 'Customer@example.com',
    card: 12345678910
  }

  customerName!: string;
  customerEmail!: string;
  customerCard!: number;

  setCustomerName(v: string) {
    this.customerName = v
    this.customerData.name = this.customerName;
  }
  setCustomerEmail(v: string) {
    this.customerEmail = v;
    this.customerData.email = this.customerEmail;
  }
  setCustomerCard(v: number) {
    this.customerCard = v;
    this.customerData.card = this.customerCard;
  }

  onSubmit() {
    window.alert(
      `Thank you ${this.customerData.name} for your Purchase`,
    );
    this.redirectToConfirmation();
    console.log(this.customerData);
  }

  redirectToConfirmation() {
    this.route.navigate(["confirmation"]);
    this.cartService.updateCustomerData(this.customerData);
  }

}
