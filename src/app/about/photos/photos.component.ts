import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from "rxjs/operators";

import { Photo } from '../photo'
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotoService]
})

export class PhotosComponent implements OnInit {
 showPhotos: boolean = false;  //toogle display of photo component 
 elementLimit = 10;  //number of photos to show
 photos: Photo[];  //stores photo observable values
 errorMessage: string;
 elementsPerRow = 1; //controls how many photos per row are displayed. 1 is the default number of photos per row.
 showOverlay: boolean = false; //Controls the displaying of an overlay that contains a photo's bigger image
 bigPicUrl: string; //stores the current photo url that will be rendered on the overlay


	constructor(
	  private http: Http,
	  private photosService: PhotoService
	) { }

  ngOnInit() {
  	this.getPhotos();
  }

  //toogles photo section on the view	
  showPhotosSection(){
  	this.showPhotos = true;
  }
  
  //call to photo service http
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
