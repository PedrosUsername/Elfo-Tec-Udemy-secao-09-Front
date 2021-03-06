import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [

  { path : 'clientes' , component: LayoutComponent,children: [
    
    { path: 'form' , component: CustomersFormComponent },
    { path: 'form/:id' , component: CustomersFormComponent },
    { path: 'list' , component: CustomersListComponent },
    { path: '', redirectTo : '/clientes/form', pathMatch: 'full' }

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
