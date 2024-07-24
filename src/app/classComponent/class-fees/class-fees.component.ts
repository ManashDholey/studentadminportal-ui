import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassFees } from 'src/app/models/ui-models/class.fee';
import { Class } from 'src/app/models/ui-models/class.model';
import { ClassService } from '../class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassFeesService } from '../class-fees.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-class-fees',
  templateUrl: './class-fees.component.html',
  styleUrls: ['./class-fees.component.css']
})
export class ClassFeesComponent implements OnInit {
  classFeeId: string | null | undefined;
  class$:Observable<Class[]> | undefined; 
  header:string = '';
  classFee:ClassFees = {id:'',
    ClassDetailId:'',
    ClassDetail:undefined ,
    FeeAmount:0};
  isNewClass = false;
  @ViewChild('classFeeDetailsForm') classFeeDetailsForm?: NgForm;
  constructor(private classService: ClassService, 
    private readonly route: ActivatedRoute,
    private router: Router,
    private classFeesService:ClassFeesService,
    private snackbar: MatSnackBar,) {}

  ngOnInit(): void {
    this.header = 'Add Class Fee';
    this.class$ = this.classService.getAllClass();
    this.route.paramMap.subscribe(
      (params) => {
        this.classFeeId = params.get('id');
        if (this.classFeeId) {
          if (this.classFeeId.toLowerCase() === 'Add'.toLowerCase()) {
            // -> new Student Functionality
            this.isNewClass = true;
            this.header = 'Add New Class Fee';
          } else {
            this.isNewClass = false;
            this.header = 'Edit Class Fee';
            this.classFeesService.getClassFees(this.classFeeId)
              .subscribe(
                (successResponse) => {
                  this.classFee = successResponse;
                },
                (errorResponse) => {
                  
                }
              );
          }
        }
      })
  }
  
  onUpdate(): void{
    if (this.classFeeDetailsForm?.form.valid) {
      this.classFeesService.updateClassFees(this.classFee.id, this.classFee)
        .subscribe(
          (successResponse) => {
            // Show a notification
            this.snackbar.open('Class Fees updated successfully', undefined, {
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
    this.classFeesService.deleteClassFees(this.classFee.id)
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
    if (this.classFeeDetailsForm?.form.valid) {
      this.classFeesService.addClassFees(this.classFee)
      .subscribe(
        (successResponse) => {
          this.snackbar.open('Class fees added successfully', undefined, {
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigateByUrl(`class-fee-list/${successResponse.id}`);
          }, 2000);
        },
        (errorResponse) => {
          // Log
          console.log(errorResponse);
        }
      );
    }else{
      console.log(this.classFeeDetailsForm?.form.valid);
    }
  }

}
