import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from "rxjs/operators";

import { Comment } from '../comment'
import { CommentService } from '../comment.service';
import { Post } from '../post'
import { PostService } from '../post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentService, PostService]
})
export class CommentsComponent implements OnInit {
	showComments: boolean = false;
	commentsArray: any = [];
	comments: Comment[];
	postsIds: any = []; //Store users IDs extracted from posts. It'll be iterated to call user service and get comments's data
	posts: any = [];
  elementLimit = 10;


  errorMessage: string;
  mode = "Observable";

  constructor( private http: Http,
    private commentsService: CommentService,
    private postsService: PostService
  ) { }

  ngOnInit() {
  	  this.getComments(this.elementLimit);
  }

  showCommentsSection(){
  	this.showComments = true;
  }

  getComments(elementLimit: number): void {
    this.commentsService.getComments()
      .subscribe(
        comments => { comments = comments.slice(0,elementLimit);
                   this.comments = comments;
                  for(let comment of comments){
                    if(this.postsIds.indexOf(comment.postId) === -1){ 
                     this.postsIds.push(comment.postId);
                    } 
                  }
                  //this.getUsers(this.usersIds); 
                  this.postsIds.forEach(postId => {
                      this.getPost(postId);
                    })
                 },
        error => this.errorMessage = <any>error
        ); 
  }

  getPost(id: number){
    this.postsService.getPost(id)
      .subscribe(
        post => this.posts[id] = post,
        error => this.errorMessage = <any>error,
        );
  }

  trackByFn(index, comment) {    
   return comment.id; // unique id corresponding to the item
  }
}
