import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education.interface';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [],
  templateUrl: './education-card.component.html',
})
export class EducationCardComponent {
  @Input({ required: true }) education!: Education;
}
