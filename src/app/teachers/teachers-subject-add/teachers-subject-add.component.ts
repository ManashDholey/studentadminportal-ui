import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassService } from 'src/app/classComponent/class.service';
import { SubjectService } from 'src/app/classComponent/subject.service';
import { Class } from 'src/app/models/ui-models/class.model';
import { Subject } from 'src/app/models/ui-models/subject.model';
import { TeacherSubjectService } from '../teacher-subject.service';
import { TeacherSubject } from 'src/app/models/ui-models/teacher.subject.model';
import { TeacherService } from '../teacher.service';
import { Teacher } from 'src/app/models/ui-models/teacher.model';

@Component({
  selector: 'app-teachers-subject-add',
  templateUrl: './teachers-subject-add.component.html',
  styleUrls: ['./teachers-subject-add.component.css']
})
export class TeachersSubjectAddComponent implements OnInit {
  Id: string | null | undefined;
  class$:Observable<Class[]> | undefined; 
  header:string = '';
  subject$:Observable<Subject[]> | undefined; 
  teacher$:Observable<Teacher[]> | undefined; 
  isNewClass = false;
  subjectTeacher : TeacherSubject ={
    id: '',
    classDetailId: '',
    subjectId: '',
    teacherId: '',
  };
  @ViewChild('teacherSubjectForm') teacherSubjectForm?: NgForm;
  constructor(private classService: ClassService, 
    private readonly route: ActivatedRoute,
    private router: Router,
    private subjectService:SubjectService,
    private snackbar: MatSnackBar,
    private subjectTeacherServices:TeacherSubjectService,
    private teacherService:TeacherService) {}
    
  ngOnInit(): void {
    this.header = 'Add Teacher Subject';
    this.class$ = this.classService.getAllClass();
    
    this.teacher$ = this.teacherService.getAll();
    this.route.paramMap.subscribe(
      (params) => {
        this.Id = params.get('id');
        if (this.Id) {
          if (this.Id.toLowerCase() === 'Add'.toLowerCase()) {
            // -> new Student Functionality
            this.isNewClass = true;
            this.header = 'Add New Subject Teacher';
          } else {
            this.isNewClass = false;
            this.header = 'Edit Subject Teacher';
            this.subjectTeacherServices.getById(this.Id).subscribe(
              (successResponse) => {
                this.subjectTeacher = successResponse;
              },
              (errorResponse) => {
                
              }
            )
              
          }
        }
      })
  }

  onUpdate(): void{
    if (this.teacherSubjectForm?.form.valid) {
      this.subjectTeacherServices.update(this.subjectTeacher.id, this.subjectTeacher)
        .subscribe(
          (successResponse) => {
            // Show a notification
            this.snackbar.open('Teacher subject updated successfully', undefined, {
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
  objectToString(obj: any): string {
    return JSON.stringify(obj);
  }
  onDelete(): void {
    this.subjectTeacherServices.delete(this.subjectTeacher.id)
    .subscribe(
      (successResponse) => {
        this.snackbar.open('Class fees deleted successfully', undefined, {
          duration: 2000
        });

        setTimeout(() => {
          this.router.navigateByUrl('teachers-subject');
        }, 2000);
      },
      (errorResponse) => {
        // Log
      }
    );
  }
  onAdd(): void{
    if (this.teacherSubjectForm?.form.valid) {
      this.subjectTeacherServices.add(this.subjectTeacher)
      .subscribe(
        (successResponse) => {
          this.snackbar.open('Teacher subject added successfully', undefined, {
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigateByUrl('teachers-subject');
          }, 2000);
        },
        (errorResponse) => {
          // Log
          console.log(errorResponse);
        }
      );
    }else{
      console.log(this.teacherSubjectForm?.form.valid);
    }
  }
  onClassChange(event:any):void{
    // console.log(event);
     console.log('Selected value:', event.value);
     this.subject$ = this.subjectService.GetSubjectByClassIdAsync(event.value);
   }
}
