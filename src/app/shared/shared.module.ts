import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp/floating-whatsapp.component';
import { ServiceCardComponent } from './components/cards/service-card/service-card.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    FloatingWhatsappComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    FloatingWhatsappComponent,
    ServiceCardComponent    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class SharedModule { }
