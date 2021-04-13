import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MustMatch } from '../shared/validators/passwords-match.validator';
import { firebaseAuthService } from '../shared/services/firebase-auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  oldPassword:FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  resetForm: FormGroup;
  buttonHover: boolean = false;

  constructor(
    public _firebaseAuth: firebaseAuthService,
    private formBuilder: FormBuilder,
  ) {
    this.oldPassword=new FormControl('',Validators.required);
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
    this.confirmPassword = new FormControl('', Validators.required);
    this.resetForm = this.formBuilder.group(
      { oldPassword:this.oldPassword,
        password: this.password,
        confirmPassword: this.confirmPassword,
      },
      { validators: MustMatch('password', 'confirmPassword') },
    );
  }

  oldPasswordIsInvalid():boolean{
    return this.oldPassword.invalid && (this.oldPassword.touched || this.buttonHover);
  }
  
  passwordIsInvalid(): boolean {
    return this.password.invalid && (this.password.touched || this.buttonHover);
  }

  confirmPasswordIsInvalid(): boolean {
    return (
      this.confirmPassword.invalid &&
      ((this.confirmPassword.touched &&
        this.password.value &&
        this.confirmPassword.value !== this.password.value) ||
        this.buttonHover)
    );
  }

  resetPassword(): void {
    this._firebaseAuth.resetPassword(this.oldPassword.value,this.password.value);
      this.resetForm.reset();
  }

  ngOnInit(): void {}

}
