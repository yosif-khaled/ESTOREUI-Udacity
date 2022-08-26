import { Component, Output, EventEmitter, Input, OnInit, AfterViewInit, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerData } from 'src/app/models/customer-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-submition-form',
  templateUrl: './submition-form.component.html',
  styleUrls: ['./submition-form.component.css']
})

export class SubmitionFormComponent implements OnChanges {

  constructor(
    private route: Router,
    private cartService: CartService,
  ) { }

  @Input() cartIsEmpty!: boolean;

  @Input() message!: string;
  @Output() messageEvent = new EventEmitter<string>();

  setMessage(b: boolean) {
    if (this.cartIsEmpty == true) {
      this.message = 'Please Select at Least One product';
    } else {
      this.message = 'Good Choice of Products';
    }
    this.messageEvent.emit();
  }
  ngOnChanges(changes: SimpleChanges): void {
    const isEmptyValue = changes['cartIsEmpty'];
    console.log('ngOnChanges: ' + isEmptyValue.currentValue + ' ... ' + isEmptyValue.previousValue);
    this.setMessage(isEmptyValue.currentValue);
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
