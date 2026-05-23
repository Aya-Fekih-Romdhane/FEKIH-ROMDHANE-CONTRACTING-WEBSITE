import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[scrollReveal]', standalone: true })
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() scrollReveal: '' | 'left' | 'right' = '';
  @Input() revealDelay: string = '';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    const cssClass = this.scrollReveal === 'left'
      ? 'scroll-reveal-left'
      : this.scrollReveal === 'right'
        ? 'scroll-reveal-right'
        : 'scroll-reveal';

    el.classList.add(cssClass);
    if (this.revealDelay) {
      el.classList.add(`delay-${this.revealDelay}`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            this.observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
