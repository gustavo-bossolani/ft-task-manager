import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

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
    console.log(this.loginForm.value);
  }

  resolveFieldError(field: string): boolean {
    return this.loginForm.controls[field]?.errors && this.loginForm.controls[field].touched ? true : false;
  }

}
