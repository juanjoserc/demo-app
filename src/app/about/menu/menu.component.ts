import { Component, OnInit } from '@angular/core';

import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  activeSection: string = ''; //it's used to display only 1 section (componet selector) at a time according to user selection

  constructor(
  ) { }


  ngOnInit(): void{
  }

  //this method set the current active section (componet selector)
  showSection(event :any){
    this.activeSection = event.target.id; 
  }

}
