import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gender } from 'src/app/models/ui-models/gender.model';
import { Teacher } from 'src/app/models/ui-models/teacher.model';
import { TeacherService } from '../teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenderService } from 'src/app/services/gender.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-teachers-add',
  templateUrl: './teachers-add.component.html',
  styleUrls: ['./teachers-add.component.css']
})
export class TeachersAddComponent implements OnInit{
  teacherId: string | null | undefined;
  teacher: Teacher = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobile: 0,
    genderId: '',
    profileImageUrl: '',
    gender: {
      id: '',
      description: ''
    },
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: ''
    }
  };

  isNewStudent = false;
  header = '';
  displayProfileImageUrl = '';

  genderList: Gender[] = [];

  @ViewChild('teacherDetailsForm') teacherDetailsForm?: NgForm;

  constructor(private readonly teacherService: TeacherService,
    private readonly route: ActivatedRoute,
    private readonly genderService: GenderService,
    private snackbar: MatSnackBar,
    private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.teacherId = params.get('id');
        if (this.teacherId) {
          if (this.teacherId.toLowerCase() === 'Add'.toLowerCase()) {
            // -> new Student Functionality
            this.isNewStudent = true;
            this.header = 'Add New Teacher';
            this.setImage();
          } else {
            // -> Existing Student Functionality
            this.isNewStudent = false;
            this.header = 'Edit Teacher';
            this.teacherService.getById(this.teacherId)
              .subscribe(
                (successResponse) => {
                  this.teacher = successResponse;
                  this.setImage();
                },
                (errorResponse) => {
                  this.setImage();
                }
              );
          }
          this.genderService.getGenderList()
            .subscribe(
              (successResponse) => {
                this.genderList = successResponse;
              }
            );
        }
      }
    );
  }

  onUpdate(): void {
    if (this.teacherDetailsForm?.form.valid) {
      this.teacherService.update(this.teacher.id, this.teacher)
        .subscribe(
          (successResponse) => {
            // Show a notification
            this.snackbar.open('Teacher updated successfully', undefined, {
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
    this.teacherService.delete(this.teacher.id)
      .subscribe(
        (successResponse) => {
          this.snackbar.open('Teacher deleted successfully', undefined, {
            duration: 2000
          });
          setTimeout(() => {
            this.router.navigateByUrl('teachers');
          }, 2000);
        },
        (errorResponse) => {
          // Log
        }
      );
  }

  onAdd(): void {
    if (this.teacherDetailsForm?.form.valid) {
      // Submit form date to api
      this.teacherService.add(this.teacher)
        .subscribe(
          (successResponse) => {
            this.snackbar.open('Teacher added successfully', undefined, {
              duration: 2000
            });
            setTimeout(() => {
              this.router.navigateByUrl('teachers');
            }, 2000);
          },
          (errorResponse) => {
            // Log
            console.log(errorResponse);
          }
        );
    }
  }

  uploadImage(event: any): void {
    if (this.teacherId) {
      const file: File = event.target.files[0];
      this.teacherService.uploadImage(this.teacher.id, file)
        .subscribe(
          (successResponse) => {
            this.teacher.profileImageUrl = successResponse;
            this.setImage();
            // Show a notification
            this.snackbar.open('Profile Image Updated', undefined, {
              duration: 2000
            });
          },
          (errorResponse) => {

          }
        );
    }
  }

  private setImage(): void {
    if (this.teacher.profileImageUrl) {
      this.displayProfileImageUrl = this.teacherService.getImagePath(this.teacher.profileImageUrl);
    } else {
      // Display a default
      this.displayProfileImageUrl = '/assets/user.png';
    }
  }


}
