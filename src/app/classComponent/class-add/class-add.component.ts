import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/models/ui-models/class.model';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit{
  classId: string | null | undefined;
  class: Class = {
    id: '',
    name: ''
  };

  isNewClass = false;
  header = '';
  @ViewChild('classDetailsForm') classDetailsForm?: NgForm;
  constructor(
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router) { }
    
    
    ngOnInit(): void {
      this.route.paramMap.subscribe(
        (params) => {
          this.classId = params.get('id');
          if (this.classId) {
            if (this.classId.toLowerCase() === 'Add'.toLowerCase()) {
              // -> new Student Functionality
              this.isNewClass = true;
              this.header = 'Add New Class';
             
            } else {
              this.isNewClass = false;
              this.header = 'Edit Class';
            }
          }
        }) 
    }


  onAdd() :void{
    if (this.classDetailsForm?.form.valid) {
      
    }
  }

  onUpdate():void{

  }
  
  onDelete():void{

  }
}
