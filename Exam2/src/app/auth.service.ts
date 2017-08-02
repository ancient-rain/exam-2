import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  phoneNumber: string;
  userPhoneNumber: string;

  constructor(private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe((user: firebase.User) => {
        if (user) {
          console.log('sign in worked', user.phoneNumber);
          this.phoneNumber = user.phoneNumber;
        } else {
          this.phoneNumber = '';
          console.log('no user to sign in');
        }
      });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.userPhoneNumber = '';
  }
}
