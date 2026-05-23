import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LogoComponent } from '../logo/logo';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe, LogoComponent],
  templateUrl: './footer.html'
})
export class FooterComponent {
  ts = inject(TranslationService);

  currentYear = new Date().getFullYear();

  navLinks = [
    { key: 'nav.home',     path: '/' },
    { key: 'nav.about',    path: '/about' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.contact',  path: '/contact' }
  ];
}
