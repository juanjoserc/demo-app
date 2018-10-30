import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Photo } from '../models/photo';

@Injectable()
export class PhotoService {
  private photosUrl = 'http://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: Http
  ) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get(this.photosUrl)
                    .pipe(map((response: Response) => <Photo[]>response.json()), catchError(this.handleError('getPosts', [])));
  }

  getPhoto(id: number) {
    return this.http.get(this.photosUrl + '/' + id)
     .pipe(map((response: Response) => <Photo[]>response.json()), catchError(this.handleError('getPosts', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
