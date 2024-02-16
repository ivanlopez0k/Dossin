import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustriasRoutingModule } from './industrias-routing.module';
import { IndustriasComponent } from './industrias/industrias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [IndustriasComponent],
  imports: [
    CommonModule,
    IndustriasRoutingModule,
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class IndustriasModule { }
