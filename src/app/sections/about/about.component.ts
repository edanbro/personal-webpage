import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { certifications, education, interests, profile } from '../../data/profile';

@Component({
  selector: 'app-about',
  imports: [IconComponent, SectionHeadingComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly profile = profile;
  readonly education = education;
  readonly certification = certifications[0];
  readonly interests = interests;
}
