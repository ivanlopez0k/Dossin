import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlotaRoutingModule } from './flota-routing.module';
import { FlotaComponent } from './flota/flota.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FlotaComponent],
  imports: [
    CommonModule,
    FlotaRoutingModule,
    SharedModule
  ]
})
export class FlotaModule { }
