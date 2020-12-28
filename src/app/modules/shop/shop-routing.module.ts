import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ShopListComponent } from './shop-list/shop-list.component';


const routes: Routes = [
  {path: '', component: ShopListComponent},
  {path: 'shop-card', component: ShopCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
