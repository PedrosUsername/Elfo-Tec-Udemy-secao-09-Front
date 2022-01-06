import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicesFormComponent,
    ServicesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ServicesRoutingModule
  ],
  exports: [
    ServicesFormComponent,
    ServicesListComponent
  ],
})
export class ServicesModule { }
