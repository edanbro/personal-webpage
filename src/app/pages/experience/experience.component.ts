import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';

interface Experience {
  company: string;
  role: string;
  start: string;
  end?: string;
  location?: string;
  summary?: string;
  bullets?: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'AQ Metrics Limited',
      role: 'Software Engineer Intern',
      start: 'Apr 2024',
      end: 'Jul 2025',
      location: 'Maynooth, Kildare, Ireland',
      summary: 'Front End Development with Angular, Typescript and JavaScript, SQL; worked with SCRUM & AGILE processes.',
      bullets: [
        'Developed front-end UI & UX features to customers specifications',
        'Resolved a variety of bugs spanning front-end visuals and back-end interactions',
        'Collaborated using Jira and Scrum practices'
      ]
    },
    {
      company: 'Maynooth University',
      role: 'B.Sc. Computer Science & Software Engineering',
      start: 'Sep 2021',
      end: 'Sep 2025',
      location: 'Kildare, Ireland',
      summary: 'Undergraduate studies with projects in web development, systems and software engineering.',
      bullets: [
        'Graduated with a 2.1 Honours Degree',
        'Capstone project: Muscles Made Easy — an Angular & Firebase SPA',
        'Learned software development practices through projects, computer systems and networks, databases, and more',
        'Worked with Docker and Python Flask in a university project'
      ]
    }
  ];
}