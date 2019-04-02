import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info/info.component';
import { MultiplicadorPipe } from '../multiplicador.pipe';

@NgModule({
  declarations: [InfoComponent, MultiplicadorPipe],
  imports: [
    CommonModule,
	InfoRoutingModule
  ],
  providers:[MultiplicadorPipe]
})
export class InfoModule { }
