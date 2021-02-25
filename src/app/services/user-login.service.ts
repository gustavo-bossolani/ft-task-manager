import { AuthenticateUserResponseDto } from './../../models/authenticate-user-response.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserLoginFormDto } from 'src/models/user-login-form.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observer: 'response'
  };

  private url = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
  ) { }

  authenticateUser(loginForm: UserLoginFormDto): Observable<AuthenticateUserResponseDto> {
    return this.http.post<AuthenticateUserResponseDto>(`${this.url}auth/signin`, loginForm,this.httpOptions);
  }

}
