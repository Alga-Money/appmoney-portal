import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';
import { SigninComponent } from './signin/signin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [ SigninComponent,  SignupComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
