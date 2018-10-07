import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from "rxjs/operators";

import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  showSection: string = '';

  constructor(
    private http: Http,

  ) { }


  ngOnInit(): void{
  }

  showPosts(){
    this.showSection = 'posts';
  }

  showComments(){
    this.showSection = 'comments';
  }


  showPhotos(){
    this.showSection = 'photos';
  }

}
