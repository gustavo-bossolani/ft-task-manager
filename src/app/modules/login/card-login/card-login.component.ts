import { AuthService } from './../../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserLoginFormSubmitDto } from 'src/models/user-login-form-submit.dto';
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
    private userAuthService: UserLoginService,
    private router: Router,
    private authService: AuthService
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

        this.router.navigate(['/dashboard']);
        this.authService.saveToken(response.accessToken);

      }, ({ error }: HttpErrorResponse) => {
        this.isAuthenticated = false;
        this.errorMessage = error.message || 'Erro ao realizar login.';
        this.isLoading = false;
        loginForm.reset();

      });


  }

}
