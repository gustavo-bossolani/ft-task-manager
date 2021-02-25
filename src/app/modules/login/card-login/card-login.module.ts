import { LoginFormModule } from './../../../components/login-form/login-form.module';
import { MatCardModule } from '@angular/material/card';

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
    MatCardModule,
    ReactiveFormsModule,
    LoginFormModule
  ],
  exports: [
    CardLoginComponent
  ]
})
export class CardLoginModule { }
