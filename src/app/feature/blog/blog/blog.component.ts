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
}
