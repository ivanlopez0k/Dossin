import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitles();
    });

    this.updateTitles();
  }

  private updateTitles(): void {
    this.translate.get('flota-portada-titulo').subscribe((title: string) => {
      this.portadaData.titulo = title;
    });

    this.translate.get('flota-portada-texto').subscribe((description: string) => {
      this.portadaData.texto = description;
    });
    this.translate.get('flota-sider-titulo').subscribe((title: string) => {
      this.recorridoItems[0].titulo = title;
    });
    this.translate.get('flota-sider-texto').subscribe((title: string) => {
      this.recorridoItems[0].descripcion = title;
    });
    this.translate.get('flota-semi-titulo').subscribe((title: string) => {
      this.recorridoItems[1].titulo = title;
    });
    this.translate.get('flota-semi-texto').subscribe((title: string) => {
      this.recorridoItems[1].descripcion = title;
    });
    this.translate.get('flota-portacontenedor-titulo').subscribe((title: string) => {
      this.recorridoItems[2].titulo = title;
    });
    this.translate.get('flota-portacontenedor-texto').subscribe((title: string) => {
      this.recorridoItems[2].descripcion = title;
    });
    this.translate.get('flota-chasis-titulo').subscribe((title: string) => {
      this.recorridoItems[3].titulo = title;
    });
    this.translate.get('flota-chasis-texto').subscribe((title: string) => {
      this.recorridoItems[3].descripcion = title;
    });

    this.translate.get('flota-bitrenes-titulo').subscribe((title: string) => {
      this.recorridoItems[4].titulo = title;
    });
    this.translate.get('flota-bitrenes-texto').subscribe((title: string) => {
      this.recorridoItems[4].descripcion = title;
    });
    this.translate.get('flota-bate-titulo').subscribe((title: string) => {
      this.recorridoItems[5].titulo = title;
    });
    this.translate.get('flota-bate-texto').subscribe((title: string) => {
      this.recorridoItems[5].descripcion = title;
    });
    this.translate.get('flota-carretones-titulo').subscribe((title: string) => {
      this.recorridoItems[6].titulo = title;
    });
    this.translate.get('flota-carretones-texto').subscribe((title: string) => {
      this.recorridoItems[6].descripcion = title;
    });


  }
}
