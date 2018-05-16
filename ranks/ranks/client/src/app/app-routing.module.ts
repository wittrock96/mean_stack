import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';

import { DetailsComponent } from './details/details.component';
import { QuoteComponent } from './quote/quote.component';

import { UpdateComponent } from './update/update.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'new', component: NewComponent},
	{ path: 'update/:id', component: UpdateComponent},
	{ path: 'quote/:id', component: DetailsComponent},
	{ path: 'quote/new/:id', component: QuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
