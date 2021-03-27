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

  saveToken(token: string): void {
    this.cookieService.set(this.tokenKey, token);
  }

  getToken(): string {
    return this.cookieService.get(this.tokenKey);
  }

  invalidateToken(): void {
    const token = this.getToken();
    if (token) {
      this.cookieService.delete(this.tokenKey);
    }
  }

}
