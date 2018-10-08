import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from "rxjs/operators";

import * as $ from 'jquery';

import { Photo } from '../photo'
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotoService]
})
export class PhotosComponent implements OnInit {
 showPhotos: boolean = false;
 elementLimit = 10;
 photos: Photo[];
 errorMessage: string;
 elementsPerRow = 1;
 showOverlay: boolean = false;
 bigPicUrl: string;
 display = 'block';


  constructor(
    private http: Http,
    private photosService: PhotoService
  ) { }

  ngOnInit() {
  	this.getPhotos();
  }

  showPhotosSection(){
  	this.showPhotos = true;
  }
  
  getPhotos(){
    this.photosService.getPhotos()
      .subscribe(
        photos => this.photos = photos.slice(0,this.elementLimit),
        error => this.errorMessage = <any>error
        );
  }

  //This function allow to change the quantity of photos per row that we want to display
  photosPerRow(length: number){
  	this.elementsPerRow = Math.trunc(length) > 0 ? Math.trunc(length):1;
  	let arrayLength = Math.ceil(this.photos.length/this.elementsPerRow);
  	return new Array(arrayLength);
  }

  showBigPicture(url: string,toogle: boolean){
  	this.bigPicUrl=url;
  	this.showOverlay = toogle;
  }

  trackByFn(index, photo) {    
   return photo.id; // unique id corresponding to the item
  }
}
