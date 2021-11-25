import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PublicComponent,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PublicComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
