import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
constructor(private translate: TranslateService){}

  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: 'nosotros-title',
    texto: 'nosotros-descrip',
  };

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitles();
    });

    this.updateTitles();
  }
  private updateTitles(): void {
    this.translate.get('nosotros-title').subscribe((title: string) => {
      this.portadaData.titulo = title;
    });

    this.translate.get('nosotros-descrip').subscribe((description: string) => {
      this.portadaData.texto = description;
    });
  }
}