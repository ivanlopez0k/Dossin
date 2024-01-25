import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';

  constructor(private translate: TranslateService) {}

  initializeLanguage(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY);
    const defaultLanguage = 'es';

    const languageToUse = savedLanguage || defaultLanguage;

    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(languageToUse);
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem(this.LANGUAGE_KEY, language);
  }
}