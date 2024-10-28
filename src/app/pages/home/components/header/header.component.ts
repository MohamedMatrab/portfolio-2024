import { AsyncPipe, NgForOf } from "@angular/common";
import { Component, OnInit, inject } from '@angular/core';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { MainService } from '@shared/services/main.service';
import { AngularSvgIconModule } from "angular-svg-icon";
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LinkButtonComponent,
    AsyncPipe,
    NgForOf,
    AngularSvgIconModule
  ],
  template: `
    <section class="flex flex-col justify-between gap-5">
      <img
        src="{{(user|async)?.image}}"
        alt="Uriel Spiridione profile image"
        width="150"
        height="150"
        class="rounded-full border-4 border-cyan-500"
      />
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-sm font-semibold text-neutral-400 md:text-base"
          >Hey! I'm</span
          >
          <h1 class="text-5xl font-semibold md:text-6xl">
            {{ (user | async)?.name }}
          </h1>
        </div>
        <h2 class="text-lg text-cyan-500 md:text-xl">
          {{ (user | async)?.label }}
        </h2>
        <p class="text-sm font-semibold text-neutral-400 md:text-base">
          {{ (user | async)?.summary }}
        </p>
      </div>
      <div class="flex gap-3">
        <app-link-button
          *ngFor="let d  of ((user | async)?.profiles??[])"
          [href]="d.url"
          [title]="d.network"
        >
        <svg-icon [src]="d.icon" svgClass="w-4 h-4"></svg-icon>
        </app-link-button>
      </div>
    </section>
  `,
})
export class HeaderComponent implements OnInit {
  private mainService = inject(MainService);
  user!: Observable<User>;

  ngOnInit() {
    this.user = this.mainService.getUser();
  }
}
