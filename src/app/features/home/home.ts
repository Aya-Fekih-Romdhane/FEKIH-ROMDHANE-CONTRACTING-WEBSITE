import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe, ScrollRevealDirective],
  templateUrl: './home.html'
})
export class HomeComponent {
  ts = inject(TranslationService);
  readonly delays = ['100', '200', '300', '400', '500'];

  stats = [
    { valueKey: 'stats.years',    labelKey: 'stats.years_label' },
    { valueKey: 'stats.projects', labelKey: 'stats.projects_label' },
    { valueKey: 'stats.clients',  labelKey: 'stats.clients_label' },
    { valueKey: 'stats.team',     labelKey: 'stats.team_label' }
  ];

  whyUs = [
    { icon: '🏆', titleKey: 'about.values.0.title', descKey: 'about.values.0.desc' },
    { icon: '🤝', titleKey: 'about.values.1.title', descKey: 'about.values.1.desc' },
    { icon: '🏗️', titleKey: 'about.values.2.title', descKey: 'about.values.2.desc' },
    { icon: '⏰', titleKey: 'about.values.3.title', descKey: 'about.values.3.desc' }
  ];

  get previewServices(): any[] {
    return this.ts.tArray('services.items').slice(0, 3);
  }
}
