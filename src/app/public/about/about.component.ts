import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    { 
      name: 'Alice Johnson', 
      role: 'Principal', 
      description: 'With over 15 years of experience in education, Alice leads our school with a commitment to excellence.', 
      photo: 'assets/images/alice.jpg' 
    },
    { 
      name: 'Mark Lee', 
      role: 'Vice Principal', 
      description: 'Mark supports our students and staff, ensuring a safe and engaging learning environment.', 
      photo: 'assets/images/mark.jpg' 
    },
    { 
      name: 'Sarah Kim', 
      role: 'Math Teacher', 
      description: 'Sarah is passionate about making math accessible and enjoyable for all students.', 
      photo: 'assets/images/sarah.jpg' 
    }
  ];
}
