import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AboutRoutingModule } from './about-routing.module';
import { MenuComponent } from './menu/menu.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpModule
  ],
  declarations: [MenuComponent, PostsComponent, CommentsComponent, PhotosComponent],
  providers: [MenuComponent]
})
export class AboutModule { }
