import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { PhoneCaptcha } from '../models/phone-captcha';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.component.html',
  styleUrls: ['./phone-auth.component.scss']
})
export class PhoneAuthComponent implements OnInit {
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  phoneCaptcha: PhoneCaptcha;
  sms: any;

  constructor(public db: AngularFireDatabase,
    public authService: AuthService) {
      this.phoneCaptcha = new PhoneCaptcha();
  }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.recaptchaVerifier.render();
  }

  sendSMS() {
    const phoneNumber = this.phoneCaptcha.phoneNumber;
    const appVerifier = this.recaptchaVerifier;
    console.log('sms sent to', phoneNumber);
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((result) => {
        console.log('sms sent');
        this.sms = result;
      }).catch((e) => {
        console.error('no sms sent');
      });
  }

  signIn() {
    console.log('sign in');
    console.log('captcha', this.phoneCaptcha.captcha);
    var confirmationCode = this.phoneCaptcha.captcha;

    this.sms.confirm(confirmationCode).then((result) => {
      this.authService.userPhoneNumber = this.phoneCaptcha.phoneNumber;
    }).catch((e) => {
      console.log('sign in failed');
    });
  }

}
