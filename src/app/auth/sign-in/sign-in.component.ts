import { Component, OnInit } from '@angular/core';
import { ISignInData } from 'src/app/data/interfaces/signInData.interface';
import { firebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private _firebaseAuth:firebaseAuthService) { }

  ngOnInit(): void {
  }
  signIn(data:ISignInData):void{
    this._firebaseAuth.signIn(data);
  }
  googleSignIn():void{
    this._firebaseAuth.googleSignIn();
  }
  githubSignIn():void{
    this._firebaseAuth.githubSignIn();
  }
  facebookSignIn():void{
    this._firebaseAuth.facebookSignIn();
  }
}
