import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/customers.service';
import { Customer } from '../customers';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  clientes: Customer[] = [];
  clienteSelecionado!: Customer;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private service: CustomersService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getCustomers()
      .subscribe( resposta => this.clientes = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }



  deletarCliente(cliente: Customer){
    this.clienteSelecionado = cliente;

    this.service
      .deletar(this.clienteSelecionado)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Cliente deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'  
      )
  }

}
