import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NavComponent} from "./components/nav.components";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {OrdersComponent} from "./pages/orders/orders.component";
import {ProductComponent} from "./pages/product/product.component";
import {MainComponent} from "./pages/main/main.component";
import { AuthGuard } from './pages/auth/guard/auth.guard';
import {SignupComponent} from "./pages/auth/signup/signup.component";
import {LoginComponent} from "./pages/auth/login/login.component";

const routes: Routes = [
  {path:'main',component:MainComponent, canActivate:[AuthGuard]},
  {path: 'auth',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'orders',component:OrdersComponent, canActivate:[AuthGuard]},
  {path: 'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'product/:id/edit',component:ProductComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
