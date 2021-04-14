import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

import { ISignInData } from '../interfaces/signInData.interface';
import { ISignUpData } from '../interfaces/signUpData.interface';

@Injectable({
  providedIn: 'root',
})
export class firebaseAuthService {
  currentUser$ = new Observable<firebase.User | null>();
  errorMessage: string = '';
  infoMessage: string = '';

  constructor(private _router: Router, private auth: AngularFireAuth) {
    this.currentUser$ = this.auth.authState;
  }

  signIn(data: ISignInData): void {
    this.errorMessage = '';
    this.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userInfo) => {
        if (userInfo.user) {
          this._router.navigate(['/user']);
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
          this._router.navigate(['/user']);
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
          this._router.navigate(['/user']);
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
          this._router.navigate(['/user']);
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
          this._router.navigate(['/user']);
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

  resetPassword(oldPassword: string, newPassword: string): void {
    this.errorMessage = '';
    this.infoMessage = '';
    let user = firebase.auth().currentUser;

    //ვცადოთ სისტემაში ხელახლა შესვლა მითითებული პაროლით. თუ წარმატებით გაიარა ავტორიზაცია,
    //შევცვალოთ პაროლი. ts-ignore დამჭირდა, რადგანაც user-ს აწითლებს.
    //@ts-ignore
    this.auth
      .signInWithEmailAndPassword(user.email, oldPassword)
      .then((userInfo) => {
        if (userInfo.user) {
          //@ts-ignore
          user
            .updatePassword(newPassword)
            .then(() => {
              this.infoMessage = 'Password has been successfully updated!';
            })
            .catch((error) => {
              this.errorMessage = error.message;
            });
        }
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }

  forgotPassword(emailAddress: string): void {
    this.errorMessage = '';
    this.infoMessage = '';
    //მითითებულ მეილზე გავუგზავნოთ პაროლის შეცვლის მეილი
    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(() => {
        this.infoMessage = `reset email has been sent to ${emailAddress}`;
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
