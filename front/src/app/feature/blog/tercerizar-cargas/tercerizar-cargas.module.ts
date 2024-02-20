import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TercerizarCargasRoutingModule } from './tercerizar-cargas-routing.module';
import { TercerizarCargasComponent } from './tercerizar-cargas.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [TercerizarCargasComponent],
  imports: [
    CommonModule,
    TercerizarCargasRoutingModule,
    TranslateModule.forChild()
  ]
})
export class TercerizarCargasModule { }
