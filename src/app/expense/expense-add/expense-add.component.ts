import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../../models/ui-models/class.model';
import { Subject } from '../../models/ui-models/subject.model';
import { NgForm } from '@angular/forms';
import { ClassService } from '../../classComponent/class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../../classComponent/subject.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpenseService } from '../expense.service';
import { Expense } from 'src/app/models/ui-models/expense.model';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit{
  Id: string | null | undefined;
  class$:Observable<Class[]> | undefined; 
  header:string = '';
  subject$:Observable<Subject[]> | undefined; 
  isNewClass = false;
  expense:Expense = {
    id: '',
    chargeAmount: 0
  }  
  @ViewChild('subjectExpenseForm') subjectExpenseForm?: NgForm;
  constructor(private classService: ClassService, 
    private readonly route: ActivatedRoute,
    private router: Router,
    private subjectService:SubjectService,
    private snackbar: MatSnackBar,
    private expenseService:ExpenseService
    ) {}
    
  ngOnInit(): void {
    this.header = 'Add Subject Expense';
    this.class$ = this.classService.getAllClass();
    this.route.paramMap.subscribe(
      (params) => {
        this.Id = params.get('id');
        if (this.Id) {
          if (this.Id.toLowerCase() === 'Add'.toLowerCase()) {
            // -> new Student Functionality
            this.isNewClass = true;
            this.header = 'Add New Subject Expense';
          } else {
            this.isNewClass = false;
            this.header = 'Edit Subject Expense';
            this.expenseService.getById(this.Id).subscribe(
              (successResponse) => {
                this.expense = successResponse;
                if(this.expense?.classDetailId != undefined)
                this.subject$ = this.subjectService.GetSubjectByClassIdAsync( this.expense?.classDetailId);
              },
              (errorResponse) => {
                
              }
            )
              
          }
        }
      })
  }

  onUpdate(): void{
    if (this.subjectExpenseForm?.form.valid) {
      this.expenseService.update(this.expense.id, this.expense)
        .subscribe(
          (successResponse) => {
            // Show a notification
            this.snackbar.open('Subject expense updated successfully', undefined, {
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
    this.expenseService.delete(this.expense.id)
    .subscribe(
      (successResponse) => {
        this.snackbar.open('Subject expance deleted successfully', undefined, {
          duration: 2000
        });

        setTimeout(() => {
          this.router.navigateByUrl('expance');
        }, 2000);
      },
      (errorResponse) => {
        // Log
      }
    );
  }
  onAdd(): void{
    if (this.subjectExpenseForm?.form.valid) {
      
      this.expenseService.add(this.expense)
      .subscribe(
        (successResponse) => {
          this.snackbar.open(' subject expense added successfully', undefined, {
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigateByUrl('expense');
          }, 2000);
        },
        (errorResponse) => {
          // Log
          console.log(errorResponse);
        }
      );
    }
  }
  onClassChange(event:any):void{
    // console.log(event);
     console.log('Selected value:', event.value);
     this.subject$ = this.subjectService.GetSubjectByClassIdAsync(event.value);
   }

}
