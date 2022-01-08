import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesListComponent } from './services-list/services-list.component';

const routes: Routes = [

  {path: 'servico-prestado', component: LayoutComponent, children:[
    {path: 'form', component: ServicesFormComponent},
    {path: 'listagem', component: ServicesListComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
