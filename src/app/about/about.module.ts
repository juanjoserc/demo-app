import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AboutRoutingModule } from './about-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpModule
  ],
  declarations: [MenuComponent],
  providers: [MenuComponent]
})
export class AboutModule { }
