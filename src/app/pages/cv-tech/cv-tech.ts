import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv-tech',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './cv-tech.html',
  styleUrls: ['./cv-tech.css'],
})
export class CvTech {
 activeSection: number = 0;

  toggle(id: number) {
    this.activeSection = this.activeSection === id ? 0 : id;
  }
}
