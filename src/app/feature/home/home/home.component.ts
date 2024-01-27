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
        imageSrc: '../../../../assets/images/camion-1.jpeg',
        title: 'blog title1',
        description: 'blog1-p',
        link: '/blog'
    },
    { 
        imageSrc: '../../../../assets/images/camion-2.jpeg',
        title: 'blog title2',
        description: 'blog2-p',
        link: '/blog'
    },
    { 
        imageSrc: '../../../../assets/images/camion-3.jpeg',
        title: 'blog title3',
        description: 'blog3-p',
        link: '/blog'
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
