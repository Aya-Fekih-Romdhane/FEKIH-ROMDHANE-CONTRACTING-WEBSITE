import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-badge',
  standalone: true,
  styles: [`
    :host { display: inline-block; }
    .badge-wrap {
      display: flex;
      align-items: stretch;
      height: 58px;
      background: #1a1a2e;
      border: 1.5px solid #f5a623;
      border-radius: 5px;
      overflow: hidden;
    }
    .badge-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding: 6px 14px 6px 16px;
      gap: 0;
    }
    .badge-title {
      font-family: 'Cairo', sans-serif;
      font-size: 20px;
      font-weight: 900;
      color: white;
      white-space: nowrap;
      line-height: 1.1;
    }
    .badge-divider {
      height: 2px;
      background: #f5a623;
      border-radius: 2px;
      width: 100%;
      margin: 3px 0;
    }
    .badge-subtitle {
      font-family: 'Cairo', sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: #f5a623;
      white-space: nowrap;
      line-height: 1.1;
    }
  `],
  template: `
    <div class="badge-wrap">

      <!-- Arabic text (HTML — renders correctly) -->
      <div class="badge-text">
        <span class="badge-title">فقيه رمضان</span>
        <div class="badge-divider"></div>
        <span class="badge-subtitle">للمقاولات</span>
      </div>

      <!-- Golden crane badge (SVG — Latin FRC renders fine) -->
      <svg width="58" height="58" viewBox="0 0 58 58"
           fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0; display:block;">

        <!-- Golden background -->
        <rect x="0" y="0" width="58" height="58" fill="#f5a623"/>

        <!-- Vertical mast -->
        <rect x="26" y="6" width="5" height="34" rx="1.5" fill="#1a1a2e"/>

        <!-- Boom — counterweight side (left) -->
        <rect x="9"  y="6" width="17" height="4" rx="1.5" fill="#1a1a2e"/>

        <!-- Boom — load side (right) -->
        <rect x="31" y="6" width="17" height="4" rx="1.5" fill="#1a1a2e"/>

        <!-- Counterweight block -->
        <rect x="9" y="10" width="7" height="8" rx="1.5" fill="#1a1a2e"/>

        <!-- Hanging cable -->
        <line x1="46" y1="10" x2="46" y2="29"
              stroke="#1a1a2e" stroke-width="1.8" stroke-linecap="round"/>

        <!-- Hook block -->
        <rect x="41" y="29" width="10" height="6" rx="2" fill="#1a1a2e"/>

        <!-- Base platform -->
        <rect x="19" y="41" width="19" height="4" rx="1.5" fill="#1a1a2e"/>

        <!-- FRC label -->
        <text x="29" y="54"
              font-family="'Inter','Arial Black',sans-serif"
              font-size="7.5" font-weight="900" fill="#1a1a2e"
              text-anchor="middle" letter-spacing="2">FRC</text>

      </svg>

    </div>
  `
})
export class LogoBadgeComponent {}
