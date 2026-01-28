import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv-finance',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cv-finance.html',
  styleUrls: ['./cv-finance.css'],
})
export class CvFinance {
  activeSection: number = 0;
  toggle(id: number) {
    this.activeSection = this.activeSection === id ? 0 : id;
  }
}
