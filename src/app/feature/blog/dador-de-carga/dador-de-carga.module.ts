import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadorDeCargaRoutingModule } from './dador-de-carga-routing.module';
import { DadorDeCargaComponent } from './dador-de-carga.component';



@NgModule({
  declarations: [DadorDeCargaComponent],
  imports: [
    CommonModule,
    DadorDeCargaRoutingModule
  ]
})
export class DadorDeCargaModule { }
