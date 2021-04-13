import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

import { ISignInData } from '../data/interfaces/signInData.interface';
import { ISignUpData } from '../data/interfaces/signUpData.interface';

@Injectable({
  providedIn: 'root',
})
export class firebaseAuthService {
  currentUser$ = new Observable<firebase.User | null>();
  errorMessage: string = '';

  constructor(private _router: Router, private auth: AngularFireAuth) {
    this.currentUser$ = this.auth.authState;
  }

  signIn(data: ISignInData): void {
    this.errorMessage = '';
    this.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userInfo) => {
        if (userInfo.user) {
          this._router.navigate(['/home']);
        }
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
  googleSignIn(): void {
    this.errorMessage = '';
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((data: any) => {
        if (data.credential.accessToken) {
          this._router.navigate(['/home']);
        }
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
  githubSignIn(): void {
    this.errorMessage = '';
    this.auth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((data: any) => {
        if (data.credential.accessToken) {
          this._router.navigate(['/home']);
        }
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
  facebookSignIn(): void {
    this.errorMessage = '';
    this.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((data: any) => {
        if (data.credential.accessToken) {
          this._router.navigate(['/home']);
        }
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
  signUp(data: ISignUpData): void {
    this.errorMessage = '';
    this.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((data) => {
        if (data.user) {
          this._router.navigate(['/home']);
        }
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }

  signOut(): void {
    this.auth.signOut();
    this._router.navigate(['/signIn']);
  }
  resetPassword(newPassword: string): void {
    this.errorMessage = '';
    const user = firebase.auth().currentUser;
    //@ts-ignore
    user
      .updatePassword(newPassword)
      .then(() => {
        console.log('password has been updated!');
      })
      .catch(function (error) {
        //@ts-ignore
        this.errorMessage = error.message;
      });
  }
  forgotPassword(emailAddress: string): void {
    this.errorMessage = '';
    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(
        //@ts-ignore
        console.log(`reset email has been sent to ${emailAddress}`)
      )
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
