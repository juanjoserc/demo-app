import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { User } from './user';

@Injectable()
export class UserService {
  private usersUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: Http
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
                    .pipe(map((response: Response) => <User[]>response.json()), catchError(this.handleError));
  }

  getUser(id: number){
    return this.http.get(this.usersUrl + "/" + id)
     .pipe(map((response: Response) => <User[]>response.json()), catchError(this.handleError));
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