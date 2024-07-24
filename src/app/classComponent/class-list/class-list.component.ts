import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from 'src/app/models/ui-models/class.model';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  allClass: Class[] = [];
  displayedColumns: string[] = [
    'className',
    'status','Edit'];
  dataSource: MatTableDataSource<Class> = new MatTableDataSource<Class>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';
constructor(private classService: ClassService){
}
  ngOnInit(): void {
    this.classService.getAllClass().subscribe((successResponse) => {
      this.allClass = successResponse;
      this.dataSource = new MatTableDataSource<Class>(this.allClass);

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

filterClasses(){
  this.dataSource.filter = this.filterString.trim().toLowerCase();
}


}
