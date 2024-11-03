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

    this.upcomingEvents =  this.generateDynamicEvents();
  }
  addDays(date:any, days:any) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }
  addMonths(date:any, months:any) {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }
  generateDynamicEvents() {
    const today = new Date();
  
    // Generate events with dynamically set dates
    return [
      { date: this.addDays(today, 10), event: 'Parent-Teacher Meeting' },      // 10 days from today
      { date: this.addMonths(today, 1), event: 'New Semester Begins' },        // 1 month from today
      { date: this.addMonths(today, 3), event: 'School Annual Day' }           // 3 months from today
    ];
  }
  
}
