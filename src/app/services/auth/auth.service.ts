import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'taskmToken';

  constructor(
    private cookieService: CookieService
  ) { }

  saveToken(token: string) {
    this.cookieService.set(this.tokenKey, token);
  }

  getToken() {
    return this.cookieService.get(this.tokenKey);
  }

}
