import { Component, OnInit } from '@angular/core';

import { ISignUpData } from 'src/app/auth/shared/interfaces/signUpData.interface';
import { firebaseAuthService } from '../shared/services/firebase-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private _firebaseAuth:firebaseAuthService) {}

  ngOnInit(): void {}
  signUp(data:ISignUpData){
    this._firebaseAuth.signUp(data);
  }
}
