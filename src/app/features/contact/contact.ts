import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe, ScrollRevealDirective],
  templateUrl: './contact.html'
})
export class ContactComponent {
  ts = inject(TranslationService);
  readonly delays = ['100', '200', '300', '400'];

  status = signal<FormStatus>('idle');

  form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  infoCards = [
    {
      icon: 'phone',
      labelKey: 'contact.phone_label',
      valueKey: 'contact.phone',
      href: 'tel:+216XXXXXXXXX'
    },
    {
      icon: 'email',
      labelKey: 'contact.email_label',
      valueKey: 'contact.email',
      href: 'mailto:info@fekih-romdhane.tn'
    },
    {
      icon: 'location',
      labelKey: 'contact.address_label',
      valueKey: 'contact.address',
      href: 'https://maps.google.com/?q=Bekalta,Monastir,Tunisia'
    },
    {
      icon: 'clock',
      labelKey: 'contact.hours_label',
      valueKey: 'contact.hours',
      href: null
    }
  ];

  async submit(): Promise<void> {
    if (this.status() === 'sending') return;
    this.status.set('sending');
    // Simulate API call — replace with real endpoint
    await new Promise(r => setTimeout(r, 1800));
    this.status.set('success');
    this.form = { name: '', email: '', phone: '', subject: '', message: '' };
    setTimeout(() => this.status.set('idle'), 5000);
  }
}
