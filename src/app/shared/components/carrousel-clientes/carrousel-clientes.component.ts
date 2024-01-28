import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel-clientes',
  templateUrl: './carrousel-clientes.component.html',
  styleUrls: ['./carrousel-clientes.component.scss']
})
export class CarrouselClientesComponent {
  @Input() empresasInfo: any[] = [];
}
