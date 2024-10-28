import { Component, Input } from '@angular/core';
import { Experience } from '@models';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [AngularSvgIconModule],
  template: `
    <article
      class="group/item flex flex-col rounded-lg border-neutral-800 py-3 transition-all hover:scale-[102%] md:flex-row md:items-center md:gap-6"
    >
      <div
        class="w-32 shrink-0 font-medium text-neutral-400 transition-all group-hover/item:text-cyan-500 md:text-right"
      >
        {{ experience.startDate }} - {{ experience.endDate }}
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="flex items-center gap-2 text-2xl font-semibold">
          @if (experience.url) {
            <a
              [href]="experience.url"
              class="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ experience.company }}
            </a>
            <svg-icon [src]="'assets/icons/link.svg'" class="w-4 h-4"/>
          } @else {
            {{ experience.company }}
          }
        </h3>
        <p class="text-sm font-medium text-neutral-300">
          {{ experience.position }}
        </p>
        <p class="text-sm text-neutral-400">
          {{ experience.description }}
        </p>
      </div>
    </article>
  `,
})
export class ExperienceCardComponent {
  @Input({ required: true }) experience!: Experience;
}
