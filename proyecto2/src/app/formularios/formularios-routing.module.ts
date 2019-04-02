import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulariosComponent } from './formularios/formularios.component';

const routes: Routes = [{
	path:'',
	component: FormulariosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
