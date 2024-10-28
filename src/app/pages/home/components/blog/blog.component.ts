import { Component, OnInit, inject } from '@angular/core';
import { Post } from '@models';
import { PostComponent } from '../post/post.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostComponent, TitleComponent, LinkButtonComponent],
  template: `
    <section id="blog">
      <hgroup class="flex items-baseline gap-2">
        <app-title>Blog</app-title>
        <span class="text-xs font-semibold text-neutral-400">(Spanish)</span>
      </hgroup>
      <ul
        class="mt-10 flex flex-col justify-center gap-3 md:flex-row md:flex-wrap"
      >
        @for (post of posts; track post.id) {
          <li class="flex-[1_0_40%]">
            <app-post [post]="post" />
          </li>
        }
      </ul>
      <app-link-button
        href="https://blog.uspiri.com"
        btnStyle="base"
        class="mt-8 flex underline"
        >Read more...</app-link-button
      >
    </section>
  `,
})
export class BlogComponent implements OnInit {
  private mainService = inject(MainService);

  posts: Post[] = [];

  ngOnInit() {
    this.mainService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
