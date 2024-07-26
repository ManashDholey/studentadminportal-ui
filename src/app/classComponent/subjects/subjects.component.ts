import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'src/app/models/ui-models/subject.model';
import { SubjectService } from '../subject.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  allSubjects: Subject[] = [];
  displayedColumns: string[] = ['subjectName',
    'className',
    'status','Edit'];
  dataSource: MatTableDataSource<Subject> = new MatTableDataSource<Subject>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString:string = "";
  isNewClass:boolean = false;
  constructor(
    private subjectService:SubjectService,
    ) {}

    ngOnInit(): void {
      this.subjectService.getAll().subscribe((successResponse) => {
        this.allSubjects = successResponse;
        console.log(this.allSubjects);
        this.dataSource = new MatTableDataSource<Subject>(this.allSubjects);
  
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
