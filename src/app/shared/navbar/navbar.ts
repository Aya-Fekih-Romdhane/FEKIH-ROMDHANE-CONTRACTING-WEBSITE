import { Component, HostListener, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService, Language } from '../../core/services/translation.service';
import { ThemeService } from '../../core/services/theme.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LogoComponent } from '../logo/logo';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe, LogoComponent],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  ts = inject(TranslationService);
  theme = inject(ThemeService);

  isScrolled = signal(false);
  mobileOpen = signal(false);
  langDropOpen = signal(false);

  readonly lang = this.ts.language;
  readonly isDark = this.theme.isDark;

  readonly navLinks = [
    { key: 'nav.home',     path: '/' },
    { key: 'nav.about',    path: '/about' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.contact',  path: '/contact' }
  ];

  readonly languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ar', label: 'العربية',  flag: '🇹🇳' },
    { code: 'en', label: 'English',  flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  setLanguage(lang: Language): void {
    this.ts.setLanguage(lang);
    this.langDropOpen.set(false);
    this.mobileOpen.set(false);
  }

  toggleMobile(): void { this.mobileOpen.update(v => !v); }
  toggleLangDrop(): void { this.langDropOpen.update(v => !v); }
  toggleTheme(): void { this.theme.toggle(); }
  closeMobile(): void { this.mobileOpen.set(false); }

  currentLangLabel = computed(() =>
    this.languages.find(l => l.code === this.lang())?.label || 'AR'
  );
  currentLangFlag = computed(() =>
    this.languages.find(l => l.code === this.lang())?.flag || '🇹🇳'
  );
}
