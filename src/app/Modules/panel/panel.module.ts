import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { CPanelComponent } from './c-panel/c-panel.component';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';


@NgModule({
  declarations: [CPanelComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    PostsModule,
    CommentsModule
  ]
})
export class PanelModule { }
