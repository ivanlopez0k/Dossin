import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  serviceData = [
    {
      cardTitle: 'Transporte de Cargas Paletizadas',
      cardImg: '../../../../assets/logos/servicios-sec1/cargas-paletizadas.png',
      cardDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ex alias esse expedita! Labore dolore doloremque aut iuredolor    in     aliquam.',
    },
    {
      cardTitle: 'Cargas a Granel',
      cardImg: '../../../../assets/logos/servicios-sec1/granel.png',
      cardDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ex alias esse expedita! Labore dolore doloremque aut iuredolor    in     aliquam.',
    },
    {
      cardTitle: 'Transporte de Contenedores',
      cardImg: '../../../../assets/logos/servicios-sec1/container.png',
      cardDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ex alias esse expedita! Labore dolore doloremque aut iuredolor    in     aliquam.',
    },
    {
      cardTitle: 'Transporte Internacional',
      cardImg: '../../../../assets/logos/servicios-sec1/transporte-internacional.png',
      cardDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ex alias esse expedita! Labore dolore doloremque aut iuredolor    in     aliquam.',
    }
  ];
  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: 'Servicios',
    texto: 'Profesionales dedicados a atender todas las necesidades'
  };
}
