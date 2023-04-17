import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NavComponent} from "./components/nav.components";
import { UsersComponent } from './pages/users/users.component';
import {OrdersComponent} from "./pages/orders/orders.component";
import {ProductComponent} from "./pages/product/product.component";
import {MainComponent} from "./pages/main/main.component";
import { AuthGuard } from './pages/auth/guard/auth.guard';
import {SignupComponent} from "./pages/auth/signup/signup.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {AsyncPipe, DatePipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCardModule} from "ng-zorro-antd/card";
import {IconModule} from "./components/icon/icon.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";

const routes: Routes = [
  {path:'main',component:MainComponent, canActivate:[AuthGuard]},
  {path: 'auth',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'orders',component:OrdersComponent, canActivate:[AuthGuard]},
  {path: 'users',component:UsersComponent, canActivate:[AuthGuard]},
  // {path: 'product/:id/edit',component:ProductComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }), AsyncPipe, NgIf, NgForOf, NzFormModule, NzCardModule, DatePipe, IconModule, NzIconModule, NgStyle, NzButtonModule, ReactiveFormsModule, NzInputModule],
  exports: [RouterModule],
  declarations:[UsersComponent]
})
export class AppRoutingModule { }
