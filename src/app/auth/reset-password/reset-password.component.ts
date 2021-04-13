import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { firebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  password: FormControl;
  resetForm: FormGroup;
  buttonHover: boolean = false;
  constructor(public _firebaseAuth: firebaseAuthService) {
    this.password = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}',
        ),
      ]),
    );
    this.resetForm = new FormGroup({
      password: this.password,
    });
  }
  passwordIsInvalid(): boolean {
    return this.password.invalid && (this.password.touched || this.buttonHover);
  }

  ngOnInit(): void {}
  resetPassword(): void {
    this._firebaseAuth.resetPassword(this.password.value);
  }
}
