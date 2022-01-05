import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customers/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiURL: string = "http://localhost:8080" + '/api/clientes';

  constructor(private http: HttpClient) { }

  logSomething(): void {
    console.log("something...");
  }

  salvar( cliente: Customer ) : Observable<Customer> {
    return this.http.post<Customer>( `${this.apiURL}` , cliente);
  }

  atualizar( cliente: Customer ) : Observable<any> {
    return this.http.put<Customer>(`${this.apiURL}/${cliente.id}` , cliente);
  }

  getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL);
  }
  
  getCustomerById(id: number) : Observable<Customer> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(cliente: Customer) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }
}
