import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';
import { Customer } from '../customers';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {

  customer!: Customer;

  constructor(private service: CustomersService) {
    this.customer = service.getCustomers();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service.logSomething();
  }
}
