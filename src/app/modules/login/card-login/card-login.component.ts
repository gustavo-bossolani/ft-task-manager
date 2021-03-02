import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserLoginFormSubmitDto } from 'src/models/user-login-form-submit.dto';
import { UserLoginFormDto } from 'src/models/user-login-form.dto';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  // TODO ajustar status de autenticação
  isAuthenticated: boolean = true;
  errorMessage: string = '';
  isLoading = false;

  constructor(
    private builder: FormBuilder,
    private userAuthService: UserLoginService
  ) { }

  ngOnInit(): void { }

  handleSubmit(submitData : UserLoginFormSubmitDto) {

    const { user, loginForm } = submitData;

    this.isLoading = true;

    !this.isAuthenticated ? true : this.isAuthenticated;

    this.userAuthService.authenticateUser(user)
      .subscribe(response => {
        this.isAuthenticated = true;
        console.log(response.accessToken);

        this.isLoading = false;

        // TODO redirecionamento para o dashboard
        // TODO salvar jwt

      }, ({ error }: HttpErrorResponse) => {
        this.isAuthenticated = false;
        this.errorMessage = error.message || 'Erro ao realizar login.';
        this.isLoading = false;
        loginForm.reset();

      });


  }

}
