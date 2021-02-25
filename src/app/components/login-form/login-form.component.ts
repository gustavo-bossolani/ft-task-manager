import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserLoginFormDto } from 'src/models/user-login-form.dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  handleUserFormSubmit = new EventEmitter<UserLoginFormDto>();

  private user = new UserLoginFormDto();

  loginForm = this.builder.group({
    username: ['', [ Validators.required ]],
    password: ['', [
      Validators.required,
      Validators.pattern(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    ]]
  });

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

    this.handleUserFormSubmit.emit(this.user);
  }

  resolveFieldError(field: string): boolean {
    return this.loginForm.controls[field]?.errors && this.loginForm.controls[field].touched ? true : false;
  }

}
