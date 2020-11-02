import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from 'src/app/Guard/auth-guard.guard';
import { CPanelComponent } from './c-panel/c-panel.component';
import { AllCommentCompComponent } from './comments/all-comment-comp/all-comment-comp.component';
import { AllCommentControlComponent } from './comments/all-comment-control/all-comment-control.component';
import { AllPostComponComponent } from './posts/all-post-compon/all-post-compon.component';
import { AllPostControlComponent } from './posts/all-post-control/all-post-control.component';


const routes: Routes = [
  {path:'',component:CPanelComponent,canActivate:[AuthGuardGuard],
  children: [
    {
      path: 'all',
      component: AllPostComponComponent,
    },
    { path: 'control', component: AllPostControlComponent },
    { path: 'allcommentcontrol', component: AllCommentControlComponent },
    { path: 'allComment', component: AllCommentCompComponent },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
