import { Injectable } from '@angular/core';
import { Customer } from './customers/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  getCustomers(): Customer {
    let person = new Customer();

    return person;
  }
  logSomething(): void {
    console.log("something...");
  }
}
