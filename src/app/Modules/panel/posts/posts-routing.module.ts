import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostComponComponent } from './all-post-compon/all-post-compon.component';
import { AllPostControlComponent } from './all-post-control/all-post-control.component';


const routes: Routes = [
  {path:'',component:AllPostComponComponent ,
  children: [
    {
      path: 'all',
      component: AllPostControlComponent,
    },
    { path: 'control', component: AllPostComponComponent },
  ],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
