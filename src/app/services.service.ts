import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from './services/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiURL: string = "http://localhost:8080" + "/api/servicos-prestados"

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: Services) : Observable<Services>{
    return this.http.post<Services>(this.apiURL, servicoPrestado);
  }
}
