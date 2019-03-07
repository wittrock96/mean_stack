import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ShowroomComponent } from './showroom/showroom.component'
import { FactoryComponent } from './factory/factory.component'
const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'showroom', component: ShowroomComponent },
	{ path: 'factory', component: FactoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
