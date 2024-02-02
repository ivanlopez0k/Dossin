import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
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
}
