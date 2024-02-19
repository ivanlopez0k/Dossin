import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { SeguimientoComponent } from './seguimiento.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [SeguimientoComponent],
  imports: [
    CommonModule,
    SeguimientoRoutingModule,
    TranslateModule.forChild()
  ]
})
export class SeguimientoModule { }
