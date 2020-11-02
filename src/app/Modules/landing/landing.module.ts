import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandPageComponent } from './land-page/land-page.component';
import { HTTPService } from 'src/app/services/http.service';
import { LoginComponent } from 'src/app/login/login.component';


@NgModule({
  declarations: [LandPageComponent,LoginComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  providers:[HTTPService]
})
export class LandingModule { }
