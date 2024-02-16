import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageStateService {
  private selectedLanguageSubject = new BehaviorSubject<string>(''); // Use BehaviorSubject to keep track of the selected language
  selectedLanguage$: Observable<string> = this.selectedLanguageSubject.asObservable();

  setLanguage(language: string): void {
    this.selectedLanguageSubject.next(language);
  }
  constructor() { }
}
