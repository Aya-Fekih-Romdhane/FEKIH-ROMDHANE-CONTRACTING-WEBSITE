import { Injectable, signal, computed } from '@angular/core';

export type Language = 'ar' | 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private _translations = signal<Record<string, any>>({});
  private _language = signal<Language>('ar');

  readonly language = this._language.asReadonly();

  readonly isRtl = computed(() => this._language() === 'ar');

  t(key: string): string {
    return this.resolve(this._translations(), key) || key;
  }

  tArray(key: string): any[] {
    const val = this.resolve(this._translations(), key);
    return Array.isArray(val) ? val : [];
  }

  async setLanguage(lang: Language): Promise<void> {
    const response = await fetch(`assets/i18n/${lang}.json`);
    const translations = await response.json();
    this._translations.set(translations);
    this._language.set(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('preferred-lang', lang);
  }

  async init(): Promise<void> {
    const saved = (localStorage.getItem('preferred-lang') as Language) || 'ar';
    await this.setLanguage(saved);
  }

  private resolve(obj: any, key: string): any {
    return key.split('.').reduce((acc, k) => acc?.[k], obj) ?? '';
  }
}
