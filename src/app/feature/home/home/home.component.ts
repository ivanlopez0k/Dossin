import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: '',
    texto: '',
  };

  blogsData = [
    { 
        imageSrc: '../../../../assets/images/blog/dador-carga.jpg',
        title: 'Dador de carga',
        description: 'blog1-p',
        link: '/blog/dador-de-carga'
    },
    { 
        imageSrc: '../../../../assets/images/blog/seguimiento.jpg',
        title: 'Seguimiento',
        description: 'blog2-p',
        link: '/blog/seguimiento'
    },
    { 
        imageSrc: '../../../../assets/images/blog/tercerizar-cargas.jpg',
        title: 'Tercerizar Cargas',
        description: 'blog3-p',
        link: '/blog/tercerizar-cargas'
    },
  ];
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitles();
    });

    this.updateTitles();
  }

  private updateTitles(): void {
    this.translate.get('Portada-Title').subscribe((title: string) => {
      this.portadaData.titulo = title;
    });

    this.translate.get('Portada-p').subscribe((description: string) => {
      this.portadaData.texto = description;
    });
  }
}
