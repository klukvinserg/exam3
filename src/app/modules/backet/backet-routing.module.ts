import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerBComponent } from './customer-b/customer-b.component';


const routes: Routes = [
  {path: '', component: CustomerBComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BacketRoutingModule { }
