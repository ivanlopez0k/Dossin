import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './viajes/viajes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViajesComponent],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViajesModule { }
