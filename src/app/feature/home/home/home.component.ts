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
