import { UserLoginService } from './../../services/user-login.service';
import { LoginRoutingModule } from './login-routing.module';
import { CardLoginModule } from './card-login/card-login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CardLoginModule,
    HttpClientModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    UserLoginService
  ]
})
export class LoginModule { }
