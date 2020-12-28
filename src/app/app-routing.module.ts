import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./modules/shop/shop.module').then( m => m.ShopModule)
  },
  {
    path: 'admin',
    loadChildren: () => import ('./modules/admin/admin.module').then( m => m.AdminModule)
  },
  {
    path: 'basket',
    loadChildren: () => import ('./modules/backet/backet.module').then( m => m.BacketModule)
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
