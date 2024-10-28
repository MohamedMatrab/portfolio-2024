import { Component, inject, OnInit } from '@angular/core';
import { TitleComponent } from "../../../../shared/components/title/title.component";
import { EducationCardComponent } from "../education-card/education-card.component";
import { Education } from 'src/app/models/education.interface';
import { MainService } from '@shared/services/main.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TitleComponent, EducationCardComponent],
  templateUrl: './education.component.html',
})
export class EducationComponent implements OnInit{
  private mainService = inject(MainService);
  educations: Education[] = [];

  ngOnInit() {
    this.mainService.getEducations().subscribe((data) => (this.educations = data));
  }
}
