import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { AllCommentCompComponent } from './all-comment-comp/all-comment-comp.component';
import { AllCommentControlComponent } from './all-comment-control/all-comment-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllCommentCompComponent, AllCommentControlComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommentsModule { }
