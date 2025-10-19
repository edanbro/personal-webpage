import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

interface Project {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Personal website',
      description: 'This site! — an Angular + Tailwind personal page, deployed to GitHub Pages.',
      tech: ['Angular', 'Tailwind', 'GitHub Pages'],
      link: 'https://github.com/edanbro/personal-webpage'
    },
    {
      title: 'Muscles Made Easy',
      description: 'Capstone project; SPA built with Angular and Firebase for fitness planning and exercise discovery.',
      tech: ['Angular', 'Firebase', 'Typescript', 'NoSQL DB'],
      link: 'https://muscles-made-easy.web.app/'
    },
    {
      title: 'Maynooth University Demonstrator Allocation System',
      description: 'Worked on several improvements and fixes to the university\'s internal system for managing lab demonstrator allocations.',
      tech: ['Python Flask', 'Docker'],
    },
    {
      title: 'Chord Assist',
      description: 'A react web app designed to help users learn and practice guitar chords through an interactive interface and with Ollama chatbot integration.',
      tech: ['React', 'Node.js', 'Ollama API'],
    }
  ];
}