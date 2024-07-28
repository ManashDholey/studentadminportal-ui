import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Teacher } from 'src/app/models/ui-models/teacher.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent {
  teachers: Teacher[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'gender', 'edit'];
  dataSource: MatTableDataSource<Teacher> = new MatTableDataSource<Teacher>();
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
          this.dataSource = new MatTableDataSource<Teacher>(this.teachers);

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
