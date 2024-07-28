import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherSubject } from 'src/app/models/ui-models/teacher.subject.model';
import { TeacherSubjectService } from '../teacher-subject.service';

@Component({
  selector: 'app-teachers-subject',
  templateUrl: './teachers-subject.component.html',
  styleUrls: ['./teachers-subject.component.css']
})
export class TeachersSubjectComponent {
  allTeacherSubjects: TeacherSubject[] = [];
  displayedColumns: string[] = ['subjectName',
    'className',
    'teacherName','Edit'];
  dataSource: MatTableDataSource<TeacherSubject> = new MatTableDataSource<TeacherSubject>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString:string = "";
  isNewClass:boolean = false;
  constructor(
    private subjectService:TeacherSubjectService,
    ) {}

    ngOnInit(): void {
      this.subjectService.getAll().subscribe((successResponse) => {
        this.allTeacherSubjects = successResponse;
        console.log(this.allTeacherSubjects);
        this.dataSource = new MatTableDataSource<TeacherSubject>(this.allTeacherSubjects);
  
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
