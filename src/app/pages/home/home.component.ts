import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-home',
  imports: [IconComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  readonly profile = profile;

  // A link like /#projects (or an old /projects URL) lands before the sections exist,
  // so scroll to the section once they have rendered.
  ngAfterViewInit(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      setTimeout(() => document.getElementById(fragment)?.scrollIntoView({ behavior: 'instant' }));
    }
  }
}
