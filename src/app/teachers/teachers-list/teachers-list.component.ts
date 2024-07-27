import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Teachers } from 'src/app/models/ui-models/teachers.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent {
  teachers: Teachers[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'gender', 'edit'];
  dataSource: MatTableDataSource<Teachers> = new MatTableDataSource<Teachers>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private teachesService: TeacherService) { }

  ngOnInit(): void {
    // Fetch Students
    this.teachesService.getAll()
      .subscribe(
        (successResponse) => {
          this.teachers = successResponse;
          //console.log(this.teachers);
          this.dataSource = new MatTableDataSource<Teachers>(this.teachers);

          if (this.matPaginator) {
            this.dataSource.paginator = this.matPaginator;
          }

          if (this.matSort) {
            this.dataSource.sort = this.matSort;
          }
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
  }

  filterTeachers() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }




}
