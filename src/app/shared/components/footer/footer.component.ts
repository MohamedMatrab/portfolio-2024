import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkButtonComponent } from "../link-button/link-button.component";
import { AngularSvgIconModule } from 'angular-svg-icon';
import { User } from '@models';
import { Observable } from 'rxjs';
import { MainService } from '@shared/services/main.service';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    LinkButtonComponent,
    AngularSvgIconModule,
    AsyncPipe,
    NgForOf
],
  template: `
    <footer
      class="mb-8 mt-24 flex flex-col items-center gap-4 px-5 text-sm text-neutral-500 dark:text-neutral-400"
    >
      <div class="flex flex-col items-center gap-4 md:flex-row">
        <section class="flex items-center gap-3">
          <div class="avatar"></div>
          <a routerLink="/" class="text-lg font-semibold"
            >{{(user | async)?.footerLabel}}</a
          >
        </section>
        <section class="media flex items-center gap-4">
        <app-link-button
          *ngFor="let d  of ((user | async)?.profiles??[])"
          [href]="d.url"
          [title]="d.network"
          [btnStyle]="'base'"
        >
        <svg-icon [src]="d.icon" svgClass="w-4 h-4"></svg-icon>
        </app-link-button>
        </section>
      </div>
      <p class="text-center text-sm">
        &copy; {{ year }}
        <span class="font-semibold"> {{(user | async)?.name}}</span>
      </p>
    </footer>
  `,
  styles: `
  .media{
    a{
      @apply p-2 fill-neutral-500 rounded-md border-neutral-500 transition-all hover:scale-105 active:scale-90 hover:bg-neutral-400/10;
    }
  }
  .avatar {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    @apply bg-neutral-950 border border-neutral-600 relative;
    &::before {
      content: "";
      height: 4px;
      width: 4px;
      border-radius: 100%;
      @apply bg-neutral-400 dark:bg-neutral-500;
      position: absolute;
      top: 10px;
      left: 10px;
      animation: eye-movement 8s infinite ease;
    }
    &::after {
      content: "";
      height: 4px;
      width: 4px;
      border-radius: 100%;
      @apply bg-neutral-400 dark:bg-neutral-500;
      position: absolute;
      top: 10px;
      left: 20px;
      animation: eye-movement 8s infinite ease;
    }
  }
  @keyframes eye-movement {
    0% {
      transform: translateX(0px) translateY(0) scaleY(1);
    }
    20% {
      transform: translateX(2px) translateY(0) scaleY(1);
    }
    30% {
      transform: translateX(-2px) translateY(0) scaleY(1);
    }
    55% {
      transform: translateX(0px) translateY(4px) scaleY(1);
    }
    65% {
      transform: translateX(0px) translateY(0px) scaleY(0.5);
    }
    70% {
      transform: translateX(0px) translateY(0px) scaleY(1);
    }
    100% {
      transform: translateX(0px) translateY(0px) scaleY(1);
    }
  }
  `,
})
export class FooterComponent implements OnInit{
  year = new Date().getFullYear();
  private mainService = inject(MainService);
  user!: Observable<User>;

  ngOnInit() {
    this.user = this.mainService.getUser();
  }
}
