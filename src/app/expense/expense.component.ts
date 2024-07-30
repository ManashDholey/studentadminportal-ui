import { Component, ViewChild } from '@angular/core';
import { Expense } from '../models/ui-models/expense.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  allSubjectExpence: Expense[] = [];
  displayedColumns: string[] = ['subjectName',
    'className',
    'chargeAmount','Edit'];
  dataSource: MatTableDataSource<Expense> = new MatTableDataSource<Expense>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString:string = "";
  isNewClass:boolean = false;
  constructor(
    private expenseService:ExpenseService
    ) {}

    ngOnInit(): void {
      this.expenseService.getAll().subscribe((successResponse) => {
        this.allSubjectExpence = successResponse;
        this.dataSource = new MatTableDataSource<Expense>(this.allSubjectExpence);
        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }
        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      },
      (errorResponse) => {
        console.log(errorResponse);
      })
    }

  filterSubject():void{
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }

}
