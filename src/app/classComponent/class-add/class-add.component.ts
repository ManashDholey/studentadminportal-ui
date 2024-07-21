import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/models/ui-models/class.model';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit{
  classId: string | null | undefined;
  class: Class = {
    id: '',
    name: '',
    status: false
  };

  isNewClass = false;
  header = '';
  @ViewChild('classDetailsForm') classDetailsForm?: NgForm;
  constructor(
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router,
    private classService :ClassService) { }
    
    
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
              this.classService.getClass(this.classId)
              .subscribe(
                (successResponse) => {
                  this.class = successResponse;
                },
                (errorResponse) => {
                  
                }
              );

            }
          }
        }) 
    }


  onAdd() :void{
    if (this.classDetailsForm?.form.valid) {
      this.classService.addClass(this.class)
      .subscribe(
        (successResponse) => {
          this.snackbar.open('Class added successfully', undefined, {
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigateByUrl(`Class/${successResponse.id}`);
          }, 2000);

        },
        (errorResponse) => {
          // Log
          console.log(errorResponse);
        }
      );
    }
  }

  onUpdate():void{
    if (this.classDetailsForm?.form.valid) {
      this.classService.updateClass(this.class.id, this.class)
        .subscribe(
          (successResponse) => {
            // Show a notification
            this.snackbar.open('Class updated successfully', undefined, {
              duration: 2000
            });
          },
          (errorResponse) => {
            // Log it
            console.log(errorResponse);
          }
        );
    }
  }
  
  onDelete():void{
    this.classService.deleteClass(this.class.id)
    .subscribe(
      (successResponse) => {
        this.snackbar.open('Class deleted successfully', undefined, {
          duration: 2000
        });

        setTimeout(() => {
          this.router.navigateByUrl('students');
        }, 2000);
      },
      (errorResponse) => {
        // Log
      }
    );
  }
}
