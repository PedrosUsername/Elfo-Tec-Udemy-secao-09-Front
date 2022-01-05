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
  success = false;
  errors!: String[];

  constructor(private service: CustomersService) {
    this.customer = new Customer();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service
    .salvar(this.customer)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.customer = response;
      } , errorResponse => {
        this.success = false;
        this.errors = ['erro'];
      })
  }
}
