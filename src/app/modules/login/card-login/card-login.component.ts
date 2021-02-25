import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnInit(): void { }

  handleSubmit() {
    console.log(this.loginForm.value);
  }

}
