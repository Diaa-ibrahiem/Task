import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandPageComponent } from './land-page/land-page.component';
import { HTTPService } from 'src/app/services/http.service';


@NgModule({
  declarations: [LandPageComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  providers:[HTTPService]
})
export class LandingModule { }
