import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsComponent } from '../../components/projects/projects';
import { PROJECTS } from '../../data/projects.data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectsComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  PROJECTS = PROJECTS;
  isLight = false;

  private renderer = inject(Renderer2);

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      this.isLight = true;
      this.renderer.addClass(document.body, 'light');
    }
  }

  toggleTheme(): void {
    this.isLight = !this.isLight;
    if (this.isLight) {
      this.renderer.addClass(document.body, 'light');
      localStorage.setItem('theme', 'light');
    } else {
      this.renderer.removeClass(document.body, 'light');
      localStorage.setItem('theme', 'dark');
    }
  }

  showComingSoon(): void {
    Swal.fire({
      icon: 'info',
      title: '🎬 Video Demo',
      text: 'Coming soon! A full walkthrough of the platform is in progress.',
      confirmButtonText: 'Got it',
      confirmButtonColor: '#2563eb',
      background: '#1e293b',
      color: '#e5e7eb',
    });
  }
}