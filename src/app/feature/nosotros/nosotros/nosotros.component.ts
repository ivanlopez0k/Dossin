import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: 'ACERCA DE DOSSIN',
    texto: 'Transporte y logistica',
  };
}
