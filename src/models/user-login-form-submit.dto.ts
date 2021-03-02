import { FormGroup } from '@angular/forms';
import { UserLoginFormDto } from './user-login-form.dto';

export interface UserLoginFormSubmitDto {
  user: UserLoginFormDto,
  loginForm: FormGroup
}
