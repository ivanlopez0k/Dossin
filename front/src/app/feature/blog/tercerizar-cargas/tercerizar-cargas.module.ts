import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TercerizarCargasRoutingModule } from './tercerizar-cargas-routing.module';
import { TercerizarCargasComponent } from './tercerizar-cargas.component';



@NgModule({
  declarations: [TercerizarCargasComponent],
  imports: [
    CommonModule,
    TercerizarCargasRoutingModule
  ]
})
export class TercerizarCargasModule { }
