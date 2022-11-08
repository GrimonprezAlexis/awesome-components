import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostsService } from './services/post.service';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
