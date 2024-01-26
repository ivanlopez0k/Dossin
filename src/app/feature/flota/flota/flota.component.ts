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
      imagenSrc: '../../../../assets/svg/Camion Contenedor.svg',
      titulo: 'Sider',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion granel.svg',
      titulo: 'Semi BV 13,5 y 14,5',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion Internacional.svg',
      titulo: 'Portacontenedor',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion Contenedor.svg',
      titulo: 'Chasis y acoplado',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion granel.svg',
      titulo: 'Batea',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion Internacional.svg',
      titulo: 'Bitrenes',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion Contenedor.svg',
      titulo: 'Toluas',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    },
    {
      imagenSrc: '../../../../assets/svg/Camion Internacional.svg',
      titulo: 'Cascetones',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aut cupiditate veritatis tempore eum cumque illo possimus in consectetur soluta nisi, quisquam, consequuntur et minus illum architecto nobis. Deserunt, cupiditate.'
    }
  ];
}
