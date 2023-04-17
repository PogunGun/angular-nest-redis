import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'auth', component: LoginComponent}
        ]),
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzCheckboxModule,
        NzLayoutModule,
    ],
  exports:[LoginComponent,SignupComponent]
})
export class AuthModule { }
