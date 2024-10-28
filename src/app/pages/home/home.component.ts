import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogComponent } from './components/blog/blog.component';
import { EducationComponent } from "./components/education/education.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    BlogComponent,
    EducationComponent
],
  template: `
    <div class="flex justify-center py-16 print:py-0 md:py-28">
      <main class="mx-4 flex w-full max-w-3xl flex-col gap-20 md:mx-8">
        <app-header />
        <app-experience />
        <app-projects />
        <app-education />
        <app-skills />
      </main>
    </div>
  `,
})
export class HomeComponent {}
