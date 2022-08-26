import { Component, Output, EventEmitter, Input, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerData } from 'src/app/models/customer-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-submition-form',
  templateUrl: './submition-form.component.html',
  styleUrls: ['./submition-form.component.css']
})

export class SubmitionFormComponent implements DoCheck {

  @Input() cartIsEmpty!: boolean;
  @Input() message!: string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(
    private route: Router,
    private cartService: CartService,
    private cd: ChangeDetectorRef,
  ) { }

  setMessage(b: boolean) {
    if (b == true || b == undefined) {
      this.message = 'Please Select at Least One product';
    } else {
      this.message = 'Good Choice of Products';
      console.log(`setMessage: ${b} message Text: ${this.message}`);
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   const isEmptyValue = changes['cartIsEmpty'];
  //   this.setMessage(isEmptyValue.currentValue);
  //   console.log(`isEmpty ngOnchanges form-C: =${isEmptyValue.currentValue}, message: ${this.message} `);
  //   this.messageEvent.emit();
  // }

  ngDoCheck() {
    this.cd.detectChanges();
    this.setMessage(this.cartIsEmpty);
    console.log(`Do Check form-C001: ${this.cartIsEmpty} , message: ${this.message}`);
  }

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
    console.log(this.cartIsEmpty);
    this.redirectToConfirmation();
  }

  redirectToConfirmation() {
    this.route.navigate(["confirmation"]);
    this.cartService.updateCustomerData(this.customerData);
  }

}
