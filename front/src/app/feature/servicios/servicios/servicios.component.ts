import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit{

  constructor(private translate: TranslateService) {}

  serviceData = [
    {
      cardTitle: '',
      cardImg: '../../../../assets/logos/servicios-sec1/cargas-paletizadas.png',
      cardDesc: '',
    },
    {
      cardTitle: 'Cargas a Granel',
      cardImg: '../../../../assets/logos/servicios-sec1/granel.png',
      cardDesc: '',
    },
    {
      cardTitle: 'Transporte de Contenedores',
      cardImg: '../../../../assets/logos/servicios-sec1/container.png',
      cardDesc: '',
    },
    {
      cardTitle: 'Transporte Internacional',
      cardImg: '../../../../assets/logos/servicios-sec1/transporte-internacional.png',
      cardDesc: '',
    },
    {
      cardTitle: '',
      cardImg: "../../../../assets/logos/servicios-sec1/carreton.png",
      cardDesc: ''
    }
  ];
  portadaData = {
    videoSrc: '../../../../assets/videos/video3.mp4',
    titulo: '',
    texto: ''
  };

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateText();
    });

    this.updateText();
  }

  private updateText(): void {
    this.translate.get('servicios-card-paletizadas-title').subscribe((title: string) => {
      this.serviceData[0].cardTitle = title;
    });
    this.translate.get('servicios-card-paletizadas-desc').subscribe((title: string) => {
      this.serviceData[0].cardDesc = title;
    });
    this.translate.get('servicios-card-granel-title').subscribe((title: string) => {
      this.serviceData[1].cardTitle = title;
    });
    this.translate.get('servicios-card-granel-desc').subscribe((title: string) => {
      this.serviceData[1].cardDesc = title;
    });
    this.translate.get('servicios-card-contenedores-title').subscribe((title: string) => {
      this.serviceData[2].cardTitle = title;
    });
    this.translate.get('servicios-card-contenedeores-desc').subscribe((title: string) => {
      this.serviceData[2].cardDesc = title;
    });
    this.translate.get('servicios-card-internacional-title').subscribe((title: string) => {
      this.serviceData[3].cardTitle = title;
    });
    this.translate.get('servicios-card-internacional-desc').subscribe((title: string) => {
      this.serviceData[3].cardDesc = title;
    });

    this.translate.get('servicios-card-maquinaria-title').subscribe((title: string) => {
      this.serviceData[4].cardTitle = title;
    });
    this.translate.get('servicios-card-maquinaria-desc').subscribe((title: string) => {
      this.serviceData[4].cardDesc = title;
    });
    this.translate.get('servicios-portada-titulo').subscribe((title: string) => {
      this.portadaData.titulo = title;
    });

    this.translate.get('servicios-portada-text').subscribe((description: string) => {
      this.portadaData.texto = description;
    });
  }
}
