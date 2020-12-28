import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacketRoutingModule } from './backet-routing.module';
import { CustomerBComponent } from './customer-b/customer-b.component';


@NgModule({
  declarations: [CustomerBComponent],
  imports: [
    CommonModule,
    BacketRoutingModule
  ]
})
export class BacketModule { }
