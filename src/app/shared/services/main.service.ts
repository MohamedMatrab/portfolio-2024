import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Experience, Post, Project, User } from '@models';
import { Education } from 'src/app/models/education.interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  BLOG_API = 'https://blog.uspiri.com/api';

  jsonLocation='assets/data'
  private http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>(`${this.BLOG_API}/posts/latests.json`);
  }

  getExperience() {
      return this.http.get<Experience[]>(`${this.jsonLocation}/experience.json`);
  }

  getProjects() {
    return this.http.get<Project[]>(`${this.jsonLocation}/projects.json`);
  }

  getEducations() {
    return this.http.get<Education[]>(`${this.jsonLocation}/educations.json`);
  }

  getSkills() {
    return this.http.get<string[]>(`${this.jsonLocation}/skills.json`);
  }

  getUser() {
    return this.http.get<User>(`${this.jsonLocation}/user.json`);
  }
}
