import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  announcements: string[];
  recentActivities: string[];
  upcomingEvents: { date: string, event: string }[];
  constructor() { 
    // Sample data, replace with dynamic data as needed
    this.announcements = [
      "New semester starts on September 1st.",
      "Parent-Teacher meetings scheduled for August 15th.",
      "School annual day on December 20th."
    ];

    this.recentActivities = [
      "Math Olympiad results announced.",
      "Inter-school debate competition held.",
      "Science fair winners awarded."
    ];

    this.upcomingEvents = [
      { date: '2024-08-15', event: 'Parent-Teacher Meeting' },
      { date: '2024-09-01', event: 'New Semester Begins' },
      { date: '2024-12-20', event: 'School Annual Day' }
    ];
  }

  
}
