import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Comment } from './comment';

@Injectable()
export class CommentService {
  private commentsUrl = 'http://jsonplaceholder.typicode.com/comments';

  constructor(
    private http: Http
  ) {}

  getComments(): Observable<Comment[]> {
    return this.http.get(this.commentsUrl)
                    .pipe(map((response: Response) => <Comment[]>response.json()), catchError(this.handleError));
  }

  getComment(id: number){
    return this.http.get(this.commentsUrl + "/" + id)
     .pipe(map((response: Response) => <Comment[]>response.json()), catchError(this.handleError));
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