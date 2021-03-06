import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }
GoogleAuth() {
  return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
}  

// Auth logic to run auth providers
AuthLogin(provider) {
  return this.afAuth.signInWithPopup(provider)
  .then((result) => {
    localStorage.setItem('user',result.user.email);
      console.log('You have been successfully logged in!',result)
  }).catch((error) => {
      console.log(error)
  })
}
}