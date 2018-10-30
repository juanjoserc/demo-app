import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService, UserService]
})
export class PostsComponent implements OnInit {
  showPosts = false;
  elementLimit = 10;
  user: any = [];
  users:  any = [];
  usersIds: any = [];  // Store users IDs extracted from posts. It'll be iterated to call user service and get user's data
  posts: Post[];

  errorMessage: string;
  mode = 'Observable';

  constructor( private http: Http,
    private postsService: PostService,
    private usersService: UserService,
    ) { }

  ngOnInit() {
    this.getPosts(this.elementLimit);
  }

  showPostsSection() {
    this.showPosts = true;
  }

  getPosts(elementLimit: number): void {
    this.postsService.getPosts()
      .subscribe(
        posts => { posts = posts.slice(0, elementLimit);
                   this.posts = posts;
                  for (let post of posts) {
                    if (this.usersIds.indexOf(post.userId) === -1) {
                     this.usersIds.push(post.userId);
                    }
                  }
                  this.usersIds.forEach(userId => {
                      this.getUser(userId);
                    });
                 },
        error => this.errorMessage = <any>error
        );
  }

  getUser(id: number) {
    this.usersService.getUser(id)
      .subscribe(
        user => this.users[id] = user,
        error => this.errorMessage = <any>error,
        );
  }

  trackByFn(index, post) {
   return post.id; // unique id corresponding to the item
  }

}
