import { ApplicationConfig, APP_INITIALIZER, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { TranslationService } from './core/services/translation.service';
import { ThemeService } from './core/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: (ts: TranslationService, theme: ThemeService) => async () => {
        theme.init();
        await ts.init();
      },
      deps: [TranslationService, ThemeService],
      multi: true
    }
  ]
};
