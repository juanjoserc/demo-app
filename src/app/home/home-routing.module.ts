import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateComponent } from './date/date.component';

const routes: Routes = [
	{ path: '', component: DateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
