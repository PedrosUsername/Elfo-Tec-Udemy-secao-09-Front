import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';
import { Customer } from 'src/app/customers/customers';
import { ServicesService } from 'src/app/services.service';
import { Services } from '../services';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css']
})
export class ServicesFormComponent implements OnInit {

  customers: Customer[] = []
  services!: Services;
  success: boolean = false;
  errors!: String[];

  constructor(
    private customerService: CustomersService,
    private servicesService: ServicesService
  ) {
    this.services = new Services();
  }

  ngOnInit(): void {
    this.customerService
      .getCustomers()
      .subscribe( response => this.customers = response );
  }

  onSubmit(){
    this.servicesService
      .salvar(this.services)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.services = new Services();
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}
