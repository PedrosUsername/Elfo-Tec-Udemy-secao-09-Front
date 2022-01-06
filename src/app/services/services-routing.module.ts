import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesListComponent } from './services-list/services-list.component';

const routes: Routes = [
  {path: 'servico-prestado-form', component: ServicesFormComponent},
  {path: 'servico-prestado-listagem', component: ServicesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
