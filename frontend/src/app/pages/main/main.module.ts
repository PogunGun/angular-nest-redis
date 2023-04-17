import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {RouterModule} from "@angular/router";
import {OrdersComponent} from "../orders/orders.component";



@NgModule({
  declarations: [

    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'main',component:OrdersComponent}
    ])
  ]
})
export class MainModule { }
