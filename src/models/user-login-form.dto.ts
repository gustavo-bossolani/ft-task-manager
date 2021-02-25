export class UserLoginFormDto {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
}
