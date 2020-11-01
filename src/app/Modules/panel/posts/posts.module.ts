import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AllPostComponComponent } from './all-post-compon/all-post-compon.component';
import { AllPostControlComponent } from './all-post-control/all-post-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllPostComponComponent, AllPostControlComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PostsModule { }
