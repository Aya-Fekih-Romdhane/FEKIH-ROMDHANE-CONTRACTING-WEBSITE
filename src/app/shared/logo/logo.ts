import { Component, Input, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { LogoBadgeComponent } from '../logo-badge/logo-badge.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [LogoBadgeComponent],
  templateUrl: './logo.html'
})
export class LogoComponent {
  @Input() width = 200;
  @Input() height = 60;
  ts = inject(TranslationService);
}
