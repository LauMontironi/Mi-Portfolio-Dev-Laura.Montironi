import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsComponent } from '../../components/projects/projects';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectsComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  PROJECTS = PROJECTS;
}
