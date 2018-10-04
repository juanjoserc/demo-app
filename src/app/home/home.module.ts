import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [HelloComponent]
})
export class HomeModule { }
