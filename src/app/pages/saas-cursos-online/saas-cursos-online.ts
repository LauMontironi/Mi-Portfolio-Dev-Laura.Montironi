import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saas-cursos-online',
  imports: [RouterLink],
  templateUrl: './saas-cursos-online.html',
  styleUrl: './saas-cursos-online.css',
})
export class SaasCursosOnline {

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
