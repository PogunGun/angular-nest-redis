import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterLink, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule.forChild([
      {
        path: '', component: UsersComponent},
    ]),
  ]
})
export class UsersModule { }
