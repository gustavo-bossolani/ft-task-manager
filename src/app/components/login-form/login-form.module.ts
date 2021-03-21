import { LoaderModule } from './../loader/loader.module';
import { LoginFormComponent } from './login-form.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }
