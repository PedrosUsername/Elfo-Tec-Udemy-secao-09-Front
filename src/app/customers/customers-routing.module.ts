import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';

const routes: Routes = [

  { path : 'clientes' , component: LayoutComponent,children: [
    
    { path: 'form' , component: CustomersFormComponent },
    { path: '', redirectTo : '/clientes/form', pathMatch: 'full' }

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
