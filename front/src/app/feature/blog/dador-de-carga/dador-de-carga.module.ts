import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadorDeCargaRoutingModule } from './dador-de-carga-routing.module';
import { DadorDeCargaComponent } from './dador-de-carga.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [DadorDeCargaComponent],
  imports: [
    CommonModule,
    DadorDeCargaRoutingModule,
    TranslateModule.forChild()
  ]
})
export class DadorDeCargaModule { }
