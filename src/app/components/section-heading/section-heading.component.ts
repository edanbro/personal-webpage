import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div class="max-w-2xl">
      <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-700 dark:text-brand-400">{{ eyebrow() }}</p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{{ title() }}</h2>
      @if (intro()) {
        <p class="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{{ intro() }}</p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input<string>();
}
