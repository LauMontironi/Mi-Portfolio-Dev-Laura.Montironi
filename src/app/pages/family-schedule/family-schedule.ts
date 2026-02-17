import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-family-schedule',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './family-schedule.html',
  styleUrl: './family-schedule.css',
})
export class FamilySchedule {

}
