import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/ui-models/student.model';
import { StudentsService } from './students.service';
import { StudentParams } from '../models/ui-models/student-params';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  @ViewChild('search') searchTerm? :ElementRef; 
  students: Student[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'gender', 'edit'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
 // @ViewChild(MatPaginator) matPaginator!: MatPaginator;
 // @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';
  pageEvent: PageEvent = new PageEvent();
  studentParams: StudentParams={
    genderId: '',
    sort: '',
    pageNumber: 0,
    pageSize: 0,
    search: ''
  };
  totalCount = 0;
  constructor(private studentService: StudentsService) { 
    this.studentParams = studentService.getStudentParams();
  }

  ngOnInit(): void {
    // Fetch Students
    this.studentService.getStudents()
      .subscribe(
        (successResponse) => {
          console.log(successResponse);
          this.totalCount = successResponse.count;
          this.studentParams.pageNumber=successResponse.pageIndex;
          this.studentParams.pageSize=successResponse.pageSize;
          this.students = successResponse.data;
          this.dataSource = new MatTableDataSource<Student>(this.students);

          // if (this.matPaginator) {
          //   this.dataSource.paginator = this.matPaginator;
          // }

          // if (this.matSort) {
          //   this.dataSource.sort = this.matSort;
          // }
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
  }
  onPaginateChange(event: PageEvent) {
    this.studentParams = this.studentService.getStudentParams();
    this.studentParams.pageNumber = event.pageIndex;
    this.studentParams.pageSize = event.pageSize;
    if(this.filterString)
      this.studentParams.search  = this.filterString.trim().toLowerCase();
      this.studentParams.pageNumber = this.studentParams.pageNumber +1;
      this.studentService.setStudentParams(this.studentParams);
      this.studentService.getStudents().subscribe({
        next: (response) => { this.students = response.data.flat();
         // console.log("this.products===>",this.students);
          this.totalCount = response.count;
          this.studentParams.pageNumber=response.pageIndex;
          this.studentParams.pageSize=response.pageSize;
          this.dataSource = new MatTableDataSource<Student>(this.students);
          },
        error: error => console.log(error),
      });
  }
  filterStudents() {
    this.studentParams.search  = this.filterString.trim().toLowerCase();
  }


}
