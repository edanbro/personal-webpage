import { Component, HostListener, afterNextRender } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-header',
  imports: [IconComponent],
  // Sticky on the host: a sticky <header> inside it could only stick within the host's own height.
  host: { class: 'sticky top-0 z-40 block' },
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];
  readonly cv = profile.cv;

  menuOpen = false;
  scrolled = false;
  activeSection = '';
  isDark = document.documentElement.classList.contains('dark');

  constructor() {
    afterNextRender(() => this.onScroll());
  }

  // Highlights the nav link for the section currently under the header.
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 8;

    let current = '';
    for (const link of this.links) {
      const section = document.getElementById(link.id);
      if (section && section.getBoundingClientRect().top <= 120) current = link.id;
    }
    // The last section can be too short to reach the header, so count the page bottom as "in" it.
    const atBottom = window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    this.activeSection = atBottom ? this.links[this.links.length - 1].id : current;
  }

  // Template click handlers must call these rather than assign `menuOpen = false` inline:
  // Angular cancels the click when a handler evaluates to false, which stops links navigating.
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
    try {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }
}
