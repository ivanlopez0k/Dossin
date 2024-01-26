import { Component } from '@angular/core';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrls: ['./flota.component.scss']
})
export class FlotaComponent {
  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: 'Nuestra Flota',
    texto: 'Preparados para prestar servicios a diferentes industrias'
  };

  recorridoItems = [
    {
      imagenSrc: '../../../../assets/logos/servicios-sec1/transporte-internacional.png',
      titulo: 'Sider',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/logos/servicios-sec1/cargas-paletizadas.png',
      titulo: 'Semi Baranda Volcable 13,5 y 14,5',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion Contenedor.svg',
      titulo: 'Portacontenedor',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/logos/servicios-sec1/chasis acoplado.png',
      titulo: 'Chasis y acoplado',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/logos/servicios-sec1/bitren.png',
      titulo: 'Bitrenes',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion granel.svg',
      titulo: 'Bate y Tolva',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/logos/servicios-sec1/carreton.png',
      titulo: 'Carretones',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    }
  ];
}
