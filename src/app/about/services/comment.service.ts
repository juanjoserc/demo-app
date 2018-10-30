import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Comment } from '../models/comment';

@Injectable()
export class CommentService {
  private commentsUrl = 'http://jsonplaceholder.typicode.com/comments';

  constructor(
    private http: Http
  ) {}

  getComments(): Observable<Comment[]> {
    return this.http.get(this.commentsUrl)
                    .pipe(map((response: Response) => <Comment[]>response.json()), catchError(this.handleError('getPosts', [])));
  }

  getComment(id: number) {
    return this.http.get(this.commentsUrl + '/' + id)
     .pipe(map((response: Response) => <Comment[]>response.json()), catchError(this.handleError('getPosts', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
