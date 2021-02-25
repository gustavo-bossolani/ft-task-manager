import { CardLoginModule } from './card-login/card-login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CardLoginModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
