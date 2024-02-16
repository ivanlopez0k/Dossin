import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageStateService } from '../language-state.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';

  constructor(
    private translate: TranslateService,
    private languageStateService: LanguageStateService
  ) {}

  initializeLanguage(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY);
    const defaultLanguage = 'es';

    const languageToUse = savedLanguage || defaultLanguage;

    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(languageToUse);
    this.languageStateService.setLanguage(languageToUse); // Set the initial language in the service
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem(this.LANGUAGE_KEY, language);
    this.languageStateService.setLanguage(language); // Update the selected language in the service
  }
}
