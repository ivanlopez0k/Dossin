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
        imageSrc: '../../../../assets/images/camion-1.jpeg',
        title: 'Dador de carga',
        description: 'blog1-p',
        link: '/blog/dador-de-carga'
    },
    { 
        imageSrc: '../../../../assets/images/camion-2.jpeg',
        title: 'Seguimiento',
        description: 'blog2-p',
        link: '/blog/seguimiento'
    },
    { 
        imageSrc: '../../../../assets/images/camion-3.jpeg',
        title: 'Tercerizar Cargas',
        description: 'blog3-p',
        link: '/blog/tercerizar-cargas'
    },
  ];
}
