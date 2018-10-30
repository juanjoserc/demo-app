import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable()
export class PostService {
  private postsUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: Http
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl)
                    .pipe(map((response: Response) => <Post[]>response.json()), catchError(this.handleError('getPosts', [])));
  }

  getPost(id: number) {
    return this.http.get(this.postsUrl + '/' + id)
     .pipe(map((response: Response) => <Post[]>response.json()), catchError(this.handleError('getPost', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
