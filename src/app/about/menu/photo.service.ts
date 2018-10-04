import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Photo } from './photo';

@Injectable()
export class PhotoService {
  private photosUrl = 'http://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: Http
  ) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get(this.photosUrl)
                    .pipe(map((response: Response) => <Photo[]>response.json()), catchError(this.handleError));
  }

  getPhoto(id: number){
    return this.http.get(this.photosUrl + "/" + id)
     .pipe(map((response: Response) => <Photo[]>response.json()), catchError(this.handleError));
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