import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ShowroomComponent } from './showroom/showroom.component'
const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'showroom', component: ShowroomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
