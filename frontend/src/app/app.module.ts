import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { GraphQLModule } from './graphql.module';
import {NavComponent} from "./components/nav.components";
import {AuthModule} from "./pages/auth/auth.module";

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        NavComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
