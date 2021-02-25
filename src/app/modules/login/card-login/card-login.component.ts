import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserLoginFormDto } from 'src/models/user-login-form.dto';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  //TODO trocar spinner por progress bar

  loginForm = this.builder.group({
    username: ['', [ Validators.required ]],
    password: ['', [ Validators.required ]]
  });

  // TODO ajustar status de autenticação
  isAuthenticated: boolean = true;
  errorMessage: string = '';

  constructor(
    private builder: FormBuilder,
    private userAuthService: UserLoginService
  ) { }

  ngOnInit(): void { }

  handleSubmit(authenticatedUser : UserLoginFormDto) {
    console.log(authenticatedUser);

    this.userAuthService.authenticateUser(authenticatedUser)
      .subscribe(response => {
        this.isAuthenticated = true;
        console.log(response.accessToken);

      }, ({ error }: HttpErrorResponse) => {
        console.log(error);

        this.isAuthenticated = false;
        this.errorMessage = error.message;
      });
  }

}
