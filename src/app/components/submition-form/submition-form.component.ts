import { Component } from '@angular/core';
import { CustomerData } from 'src/app/models/customer-model';

@Component({
  selector: 'app-submition-form',
  templateUrl: './submition-form.component.html',
  styleUrls: ['./submition-form.component.css']
})
export class SubmitionFormComponent {

  customerData: CustomerData = {
    name: 'John Doe',
    email: 'doe@example.com',
    phone: 22234567777,
    card: 22222777777
  }

  onSubmit() {
    window.alert(
      `Thank you ${this.customerData.name} for your Purchase`,
    );
  }

}
