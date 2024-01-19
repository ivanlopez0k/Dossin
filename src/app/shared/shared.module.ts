import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp/floating-whatsapp.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    FloatingWhatsappComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    FloatingWhatsappComponent,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class SharedModule { }
