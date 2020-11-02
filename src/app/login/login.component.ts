import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase'
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthService,public route:Router) { }

  ngOnInit(): void {
    // if(localStorage)
  }

  login(){
    this.auth.GoogleAuth();
    this.route.navigated['./cpanel'];
  }
}
