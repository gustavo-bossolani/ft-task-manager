import { RouterModule } from '@angular/router';
import { LoginFormModule } from './../../../components/login-form/login-form.module';

import { CardLoginComponent } from './card-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginFormModule,
    RouterModule
  ],
  exports: [
    CardLoginComponent
  ]
})
export class CardLoginModule { }
