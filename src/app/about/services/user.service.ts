import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable()
export class UserService {
  private usersUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: Http
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
                    .pipe(map((response: Response) => <User[]>response.json()), catchError(this.handleError('getUsers', [])));
  }

  getUser(id: number):  Observable<User[]> {
    return this.http.get(this.usersUrl + '/' + id)
     .pipe(map((response: Response) => <User[]>response.json()), catchError(this.handleError('getUser', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
