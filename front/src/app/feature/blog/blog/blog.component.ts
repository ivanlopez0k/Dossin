import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(private translate: TranslateService){}
  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: '',
    texto: '',
  };
  blogsData = [
    { 
        imageSrc: '../../../../assets/images/blog/dador-carga.jpg',
        title: 'blog1-title',
        description: 'blog1-p',
        link: '/blog/dador-de-carga'
    },
    { 
        imageSrc: '../../../../assets/images/blog/seguimiento.jpg',
        title: 'blog2-title',
        description: 'blog2-p',
        link: '/blog/seguimiento'
    },
    { 
        imageSrc: '../../../../assets/images/blog/tercerizar-cargas.jpg',
        title: 'blog3-title',
        description: 'blog3-p',
        link: '/blog/tercerizar-cargas'
    },
  ];
  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitles();
    });

    this.updateTitles();
  }
  private updateTitles(): void {
    this.translate.get('blog-title').subscribe((title: string) => {
      this.portadaData.titulo = title;
    });

    this.translate.get('blog-descrip').subscribe((description: string) => {
      this.portadaData.texto = description;
    });
  }
}
