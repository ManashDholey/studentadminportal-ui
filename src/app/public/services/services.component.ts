import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { 
      name: 'Tutoring Services', 
      description: 'Personalized tutoring for all grade levels and subjects.', 
      icon: 'school' 
    },
    { 
      name: 'Extracurricular Activities', 
      description: 'Wide range of clubs, sports, and arts programs.', 
      icon: 'sports_soccer' 
    },
    { 
      name: 'Counseling', 
      description: 'Professional counseling to support student well-being.', 
      icon: 'psychology' 
    },
    { 
      name: 'Library Resources', 
      description: 'Access to a large collection of books and online resources.', 
      icon: 'menu_book' 
    }
  ];
}
