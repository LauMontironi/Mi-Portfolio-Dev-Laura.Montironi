import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  Projects = input<Project[]>([]);
}
