import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CustomPreloadingStrategy } from './custom-preload-strategy';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
    data: { preload: true }
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule',
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
