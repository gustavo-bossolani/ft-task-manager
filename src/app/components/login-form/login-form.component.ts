import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginFormSubmitDto } from 'src/models/user-login-form-submit.dto';

import { UserLoginFormDto } from 'src/models/user-login-form.dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  handleUserFormSubmit = new EventEmitter<UserLoginFormSubmitDto>();

  @Input()
  isLoading = false;

  loginForm = this.builder.group({
    username: ['', [ Validators.required ]],
    password: ['', [
      Validators.required,
      Validators.pattern(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    ]]
  });

  private user = new UserLoginFormDto();

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnInit(): void { }

  handleSubmit() {
    const { password, username } = this.loginForm.value;
    Object.assign(this.user, {
      password,
      username
    });

    this.handleUserFormSubmit.emit({
      user: this.user,
      loginForm: this.loginForm
    });
  }

  resolveFieldError(field: string): boolean {
    return this.loginForm.controls[field]?.errors && this.loginForm.controls[field].touched ? true : false;
  }

}
