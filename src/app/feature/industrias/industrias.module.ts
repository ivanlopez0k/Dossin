import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustriasRoutingModule } from './industrias-routing.module';
import { IndustriasComponent } from './industrias/industrias.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [IndustriasComponent],
  imports: [
    CommonModule,
    IndustriasRoutingModule,
    SharedModule
  ]
})
export class IndustriasModule { }
