import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

type FilterKey = 'all' | 'residential' | 'commercial' | 'infrastructure' | 'renovation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, TranslatePipe, ScrollRevealDirective],
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  ts = inject(TranslationService);

  activeFilter = signal<FilterKey>('all');

  filters: { key: FilterKey; labelKey: string }[] = [
    { key: 'all',            labelKey: 'projects.filters.all' },
    { key: 'residential',    labelKey: 'projects.filters.residential' },
    { key: 'commercial',     labelKey: 'projects.filters.commercial' },
    { key: 'infrastructure', labelKey: 'projects.filters.infrastructure' },
    { key: 'renovation',     labelKey: 'projects.filters.renovation' }
  ];

  get allProjects(): any[] { return this.ts.tArray('projects.items'); }

  get filteredProjects(): any[] {
    const f = this.activeFilter();
    return f === 'all' ? this.allProjects : this.allProjects.filter(p => p.category === f);
  }

  setFilter(key: FilterKey): void { this.activeFilter.set(key); }
}
