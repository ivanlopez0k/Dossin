import { Component, Renderer2, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { LanguageStateService } from 'src/app/services/language-state.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isSideMenuVisible = false;
  selectedLang: string | undefined; // Track the selected language

  constructor(private renderer: Renderer2, public translate: LanguageService, public languageStateService: LanguageStateService) { }

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

  ngOnInit() {
    this.languageStateService.selectedLanguage$.subscribe(lang => {
      this.selectedLang = lang;
    });
  }

  switchLang(lang: string) {
    this.translate.setLanguage(lang);
    
    this.selectedLang = lang; 
  }
}
