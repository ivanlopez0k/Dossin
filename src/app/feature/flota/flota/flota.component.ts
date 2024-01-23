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
}
