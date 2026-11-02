import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { certifications, education, experience } from '../../data/profile';

@Component({
  selector: 'app-experience',
  imports: [IconComponent, SectionHeadingComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly experience = experience;
  readonly education = education;
  readonly certifications = certifications;
}
