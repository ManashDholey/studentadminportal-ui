import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/models/ui-models/subject.model';
import { ClassService } from '../class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../subject.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Class } from 'src/app/models/ui-models/class.model';


@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {
  Id: string | null | undefined;
  class$:Observable<Class[]> | undefined; 
  header:string = '';
  subject:Subject = {
    Id: '',
    ClassDetailId: '',
    ClassDetail: undefined,
    SubjectName: '',
    Status: false
  };
  isNewClass = false;
  @ViewChild('subjectForm') subjectForm?: NgForm;
  constructor(private classService: ClassService, 
    private readonly route: ActivatedRoute,
    private router: Router,
    private subjectService:SubjectService,
    private snackbar: MatSnackBar,) {}
  ngOnInit(): void {
    this.header = 'Add Subject';
    this.class$ = this.classService.getAllClass();
    this.route.paramMap.subscribe(
      (params) => {
        this.Id = params.get('id');
        if (this.Id) {
          if (this.Id.toLowerCase() === 'Add'.toLowerCase()) {
            // -> new Student Functionality
            this.isNewClass = true;
            this.header = 'Add New Subject';
          } else {
            this.isNewClass = false;
            this.header = 'Edit Subject';
            this.subjectService.getById(this.Id)
              .subscribe(
                (successResponse) => {
                  this.subject = successResponse;
                },
                (errorResponse) => {
                  
                }
              );
          }
        }
      })
  }

  onUpdate(): void{
    if (this.subjectForm?.form.valid) {
      this.subjectService.update(this.subject.Id, this.subject)
        .subscribe(
          (successResponse) => {
            // Show a notification
            this.snackbar.open('Subject updated successfully', undefined, {
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
  onDelete(): void {
    this.subjectService.delete(this.subject.Id)
    .subscribe(
      (successResponse) => {
        this.snackbar.open('Class fees deleted successfully', undefined, {
          duration: 2000
        });

        setTimeout(() => {
          this.router.navigateByUrl('class-fee-list');
        }, 2000);
      },
      (errorResponse) => {
        // Log
      }
    );
  }
  onAdd(): void{
    if (this.subjectForm?.form.valid) {
      this.subjectService.add(this.subject)
      .subscribe(
        (successResponse) => {
          this.snackbar.open('Subject added successfully', undefined, {
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigateByUrl(`subject/${successResponse.Id}`);
          }, 2000);
        },
        (errorResponse) => {
          // Log
          console.log(errorResponse);
        }
      );
    }else{
      console.log(this.subjectForm?.form.valid);
    }
  }
}
