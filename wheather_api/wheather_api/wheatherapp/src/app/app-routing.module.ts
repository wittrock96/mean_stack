import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component'
import { DenverComponent } from './denver/denver.component' 
import { SeattleComponent } from './seattle/seattle.component'
import { BurbankComponent } from './burbank/burbank.component'
import { San_joseComponent } from './san-jose/san-jose.component'
import { DallasComponent } from './dallas/dallas.component'
import { WashingtonComponent } from './washington/washington.component'
import { ChicagoComponent } from './chicago/chicago.component'
const routes: Routes = [
	{ path: '', pathMatch:'full', redirectTo: '/new' },
	{ path: 'new', component: NewComponent },
	{ path: 'denver', component: DenverComponent },
	{ path: 'seattle', component: SeattleComponent },
	{ path: 'san_jose', component: San_joseComponent },
	{ path: 'burbank', component: BurbankComponent },
	{ path: 'dallas', component: DallasComponent },
	{ path: 'washington', component: WashingtonComponent },
	{ path: 'chicago', component: ChicagoComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
