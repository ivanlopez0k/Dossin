import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isSideMenuVisible = false;

  constructor(private renderer: Renderer2, public translate: LanguageService) { }

  toggleSideMenu() {
    this.isSideMenuVisible = !this.isSideMenuVisible;

    // Obtén el elemento de la clase side-menu y ajusta su estilo de visualización
    const sideMenu = document.querySelector('.side-menu');
    if (sideMenu) {
      if (this.isSideMenuVisible) {
        this.renderer.addClass(sideMenu, 'active');
      } else {
        this.renderer.removeClass(sideMenu, 'active');
      }
    }
  }
  switchLang(lang: string) {
    this.translate.setLanguage(lang);
  }
}