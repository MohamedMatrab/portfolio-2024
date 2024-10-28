import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkButtonComponent } from '../link-button/link-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MainService } from '@shared/services/main.service';
import { User } from '@models';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, LinkButtonComponent,AngularSvgIconModule,AsyncPipe],
  templateUrl: './navbar.component.html',
  styles: `
  li{
    a{
      @apply block rounded-md py-1 px-2 transition-all hover:scale-105 hover:text-cyan-500 hover:bg-neutral-400/10 active:scale-90;
    }
  }
`,
})
export class NavbarComponent implements OnInit{
  private mainService = inject(MainService);
  user!: Observable<User>;

  ngOnInit() {
    this.user = this.mainService.getUser();
  }
}
