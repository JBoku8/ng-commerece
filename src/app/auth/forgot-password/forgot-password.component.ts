import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { firebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email: FormControl;
  resetForm: FormGroup;
  buttonHover: boolean = false;
  constructor(public _firebaseAuth: firebaseAuthService) {
    this.email = new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email]),
    );
    this.resetForm = new FormGroup({
      email: this.email,
    });
  }

  ngOnInit(): void {}
  emailIsInvalid() {
    return this.email.invalid && (this.email.touched || this.buttonHover);
  }
  forgotPassword(): void {
    this._firebaseAuth.forgotPassword(this.email.value);
  }
}
