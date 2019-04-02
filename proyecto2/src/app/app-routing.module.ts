import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
		path:'enrutable',
		loadChildren: './feature/feature.module#FeatureModule'
	},{
		path:'not-found',
		loadChildren:'./not-found/not-found.module#NotFoundModule'
	},{
		path:'info',
		loadChildren: './info/info.module#InfoModule'
	},{
		path:'forms',
		loadChildren: './formularios/formularios.module#FormulariosModule'
	}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
