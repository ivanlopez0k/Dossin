
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporteArgRoutingModule } from './transporte-arg-routing.module';
import { TransporteArgComponent } from './transporte-arg.component';

@NgModule({
  declarations: [TransporteArgComponent],
  imports: [
    CommonModule,
    TransporteArgRoutingModule
  ]
})
export class TransporteArgModule { }