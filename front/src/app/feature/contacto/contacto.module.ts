import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ]
})
export class ContactoModule { }
