import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormsModule }   from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
    //FormsModule
  ],
  declarations: [ContactFormComponent]
})
export class ContactModule { }
