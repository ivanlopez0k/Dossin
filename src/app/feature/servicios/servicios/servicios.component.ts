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
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/05/camion-semi-remolque-01-1024x725.png',
      cardDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ex alias esse expedita! Labore dolore doloremque aut iuredolor    in     aliquam.',
    },
    {
      cardTitle: 'Cargas a Granel',
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/05/camion-semi-remolque-01-1024x725.png',
      cardDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ex alias esse expedita! Labore dolore doloremque aut iuredolor    in     aliquam.',
    },
    {
      cardTitle: 'Transporte de Contenedores',
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/05/camion-semi-remolque-01-1024x725.png',
      cardDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ex alias esse expedita! Labore dolore doloremque aut iuredolor    in     aliquam.',
    },
    {
      cardTitle: 'Transporte Internacional',
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/04/internacional.png',
      cardDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ex alias esse expedita! Labore dolore doloremque aut iuredolor    in     aliquam.',
    }
  ];
  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: 'Servicios',
    texto: 'Profesionales dedicados a atender todas las necesidades'
  };
}
