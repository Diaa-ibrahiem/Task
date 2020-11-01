import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCommentCompComponent } from './all-comment-comp/all-comment-comp.component';
import { AllCommentControlComponent } from './all-comment-control/all-comment-control.component';


const routes: Routes = [
  {path:'',component:AllCommentControlComponent},
  {path:'',component:AllCommentCompComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
