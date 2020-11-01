import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './Modules/landing/landing.module';
import { PanelModule } from './Modules/panel/panel.module';
import { HTTPService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFireAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    PanelModule,
    HttpClientModule,
    // // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireAuth
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
