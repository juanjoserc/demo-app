import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Post } from './post';

@Injectable()
export class PostService {
  private postsUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: Http
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl)
                    .pipe(map((response: Response) => <Post[]>response.json()), catchError(this.handleError));
  }

  getPost(id: number){
    return this.http.get(this.postsUrl + "/" + id + '.json')
     .pipe(map((response: Response) => <Post[]>response.json()), catchError(this.handleError));
  }

  private handleError (error: Response){
    let errMsg: string;
    if(error instanceof Response){
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = '';//err.message ? err.message : err.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
  }