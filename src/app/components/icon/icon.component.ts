import { Component, input } from '@angular/core';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'phone'
  | 'map-pin'
  | 'download'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'x'
  | 'briefcase'
  | 'graduation-cap'
  | 'award'
  | 'send'
  | 'check'
  | 'alert'
  | 'loader';

// Stroke icons from Lucide (ISC licence), sized by the host element's width and height classes.
@Component({
  selector: 'app-icon',
  host: { class: 'inline-block shrink-0', 'aria-hidden': 'true' },
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="block h-full w-full">
      @switch (name()) {
        @case ('github') {
          <svg:path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <svg:path d="M9 18c-4.51 2-5-2-7-2" />
        }
        @case ('linkedin') {
          <svg:path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <svg:rect width="4" height="12" x="2" y="9" />
          <svg:circle cx="4" cy="4" r="2" />
        }
        @case ('mail') {
          <svg:rect width="20" height="16" x="2" y="4" rx="2" />
          <svg:path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        }
        @case ('phone') {
          <svg:path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        }
        @case ('map-pin') {
          <svg:path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <svg:circle cx="12" cy="10" r="3" />
        }
        @case ('download') {
          <svg:path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <svg:polyline points="7 10 12 15 17 10" />
          <svg:line x1="12" x2="12" y1="15" y2="3" />
        }
        @case ('arrow-right') {
          <svg:path d="M5 12h14" />
          <svg:path d="m12 5 7 7-7 7" />
        }
        @case ('arrow-up-right') {
          <svg:path d="M7 7h10v10" />
          <svg:path d="M7 17 17 7" />
        }
        @case ('sun') {
          <svg:circle cx="12" cy="12" r="4" />
          <svg:path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        }
        @case ('moon') {
          <svg:path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        }
        @case ('menu') {
          <svg:path d="M4 6h16M4 12h16M4 18h16" />
        }
        @case ('x') {
          <svg:path d="M18 6 6 18M6 6l12 12" />
        }
        @case ('briefcase') {
          <svg:rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <svg:path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        }
        @case ('graduation-cap') {
          <svg:path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <svg:path d="M6 12v5c3 3 9 3 12 0v-5" />
        }
        @case ('award') {
          <svg:circle cx="12" cy="8" r="6" />
          <svg:path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        }
        @case ('send') {
          <svg:path d="m22 2-7 20-4-9-9-4Z" />
          <svg:path d="M22 2 11 13" />
        }
        @case ('check') {
          <svg:path d="M20 6 9 17l-5-5" />
        }
        @case ('alert') {
          <svg:circle cx="12" cy="12" r="10" />
          <svg:path d="M12 8v4m0 4h.01" />
        }
        @case ('loader') {
          <svg:path d="M21 12a9 9 0 1 1-6.219-8.56" />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
