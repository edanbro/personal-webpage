import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { skillGroups } from '../../data/profile';

@Component({
  selector: 'app-skills',
  imports: [SectionHeadingComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly skillGroups = skillGroups;
}
