import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  id!: number;

  constructor(
    private service: CustomersService,
    private router: Router,
    private activatedRoute : ActivatedRoute
    ) {
    this.customer = new Customer();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getCustomerById(this.id)
            .subscribe( 
              response => this.customer = response ,
              errorResponse => this.customer = new Customer()
            )
        }
    })
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
