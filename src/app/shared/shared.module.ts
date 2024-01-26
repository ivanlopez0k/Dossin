import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp/floating-whatsapp.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ServiceCardComponent } from './components/cards/service-card/service-card.component';
import { PortadaComponent } from './components/portada/portada.component';
import { BlogCardsContainerComponent } from './components/blog-cards-container/blog-cards-container.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    FloatingWhatsappComponent,
    ServiceCardComponent,
    PortadaComponent,
    BlogCardsContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild()
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    FloatingWhatsappComponent,
    ServiceCardComponent,
    PortadaComponent,
    BlogCardsContainerComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class SharedModule { }
