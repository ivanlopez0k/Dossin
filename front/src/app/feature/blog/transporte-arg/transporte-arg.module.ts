
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporteArgRoutingModule } from './transporte-arg-routing.module';
import { TransporteArgComponent } from './transporte-arg.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TransporteArgComponent],
  imports: [
    CommonModule,
    TransporteArgRoutingModule,
    TranslateModule.forChild()
  ]
})
export class TransporteArgModule { }