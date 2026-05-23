import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './about.html'
})
export class AboutComponent {
  ts = inject(TranslationService);
  readonly delays = ['100', '200', '300', '400', '500'];

  get timeline(): any[] { return this.ts.tArray('about.timeline'); }
  get values(): any[]   { return this.ts.tArray('about.values'); }
  get team(): any[]     { return this.ts.tArray('about.team'); }
}
