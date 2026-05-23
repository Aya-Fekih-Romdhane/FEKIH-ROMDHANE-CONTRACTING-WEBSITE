import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, TranslatePipe, ScrollRevealDirective],
  templateUrl: './services-page.html'
})
export class ServicesPageComponent {
  ts = inject(TranslationService);
  readonly delays = ['100', '200', '300', '100', '200', '300'];
  get services(): any[] { return this.ts.tArray('services.items'); }
}
