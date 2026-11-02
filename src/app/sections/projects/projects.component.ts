import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { featuredProject, projects } from '../../data/profile';

@Component({
  selector: 'app-projects',
  imports: [IconComponent, SectionHeadingComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly featured = featuredProject;
  readonly projects = projects;
}
