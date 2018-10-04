import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from "rxjs/operators";

import { Post } from './post'
import { PostService } from './post.service';
import { User } from './user'
import { UserService } from './user.service';
import { Comment } from './comment'
import { CommentService } from './comment.service';
import { Photo } from './photo'
import { PhotoService } from './photo.service';

import { Observable, timer } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [PostService, UserService,CommentService,PhotoService]
})

export class MenuComponent implements OnInit {
	//private postsUrl = 'http://jsonplaceholder.typicode.com/posts';
	//private usersUrl = 'http://jsonplaceholder.typicode.com/users';
	//data: any = {};
 // posts: any = [];
  user:  any = [];
  //users:  any = [];
  users2: any = [];

  posts: Post[];
  users: User[];
  comments: Comment[];
  photos: Photo[];
  errorMessage: string;
  mode = "Observable";
 
  constructor(
    private http: Http,
    private postsService: PostService,
    private usersService: UserService,
    private commentsService: CommentService,
    private photosService: PhotoService
  ) { 
  	console.log('Hello jj');
  	//this.getPosts();
  //	this.getUsers();
  	//this.getData();
  	//this.getUser(1);
  }

/*
  	getData(apiUrl){
  		return this.http.get(apiUrl).pipe(map((res: Response) => res.json()))
  	}

  	getPosts1() {
  		this.getData(this.postsUrl).subscribe(posts => {
  			//console.log(data);
  			this.posts = posts;
  		})
  	}

	 getUsers2() {
  		this.getData(this.usersUrl).subscribe(users => {
  			this.users = users;
  		  for(let user of users){
  		  	this.users2[user.id]= user;
  		  }
  		// console.log(this.users2);

  		});
  	}

  	getUser2(id) {
  		this.getData(this.usersUrl+'/'+id).subscribe(user => {
  			this.user = user;
  		});
  	}
*/
  ngOnInit() {
  	let timer1 = timer(0,5000);
    timer1.subscribe(() => this.getPosts());
    timer1.subscribe(() => this.getUsers());
    timer1.subscribe(() => this.getComments());
    timer1.subscribe(() => this.getPhotos());
  }
  
  getPosts(){
    this.postsService.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error
        );
  }

  getUsers(){
    this.usersService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
        );
  }


  getComments(){
    this.commentsService.getComments()
      .subscribe(
        comments => this.comments = comments,
        error => this.errorMessage = <any>error
        );
  }

  getPhotos(){
    this.photosService.getPhotos()
      .subscribe(
        photos => this.photos = photos,
        error => this.errorMessage = <any>error
        );
  }

  getUser(id){
    let currentuser: User;
    /*this.usersService.getUser(id)
      .subscribe(
        currentuser => user = user,
        error => this.errorMessage = <any>error
        );*/
      console.log(currentuser);
     return currentuser; 
  }

}
