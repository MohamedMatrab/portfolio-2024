import { Component, Input } from '@angular/core';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Project } from 'src/app/models/project.interface';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ButtonComponent,
    LinkButtonComponent,
    BadgeComponent,
    AngularSvgIconModule,
    NgForOf,
    LinkButtonComponent
],
  template: `
    <article
      class="rounded-lg border border-neutral-800 px-5 py-4 transition-all hover:scale-[102%] hover:border-cyan-600"
    >
      <header class="mb-3 flex flex-row flex-wrap items-center gap-3">
        <h3
          class="text-nowrap text-xl font-semibold transition-all md:text-2xl"
        >
          {{ project.name }}
        </h3>
        <ul class="flex flex-wrap gap-3">
          @for (tag of project.tags; track $index) {
            <li>
              <app-badge [label]="tag" />
            </li>
          }
        </ul>
      </header>
      <p class="mb-4 text-sm leading-snug text-neutral-400 sm:text-base">
        {{ project.description }}
      </p>
      <footer class="flex gap-2">
        <ng-container *ngFor="let item of project.links">
          <app-link-button [btnStyle]="'outline'" [href]="item.url" [title]="item.title">
            <svg-icon [src]="item.icon" svgClass="w-4 h-4"></svg-icon>
          </app-link-button>
        </ng-container>
      </footer>
    </article>
  `,
})
export class ProjectComponent {
  @Input({ required: true }) project!: Project;
}
