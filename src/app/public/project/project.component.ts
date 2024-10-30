import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = [
    {
      name: 'Solar System Model',
      description: 'A scale model of the solar system showcasing each planet\'s size and orbit.',
      category: 'Science',
      status: 'Completed'
    },
    {
      name: 'Literature Book Club',
      description: 'A reading and discussion group focused on classic literature for high school students.',
      category: 'Literature',
      status: 'Ongoing'
    },
    {
      name: 'Math Olympiad Preparation',
      description: 'Training sessions and resources to help students prepare for competitive math exams.',
      category: 'Mathematics',
      status: 'Upcoming'
    },
    {
      name: 'School Garden',
      description: 'A gardening project where students learn about planting, sustainability, and teamwork.',
      category: 'Environmental Studies',
      status: 'Ongoing'
    }
  ];
}
