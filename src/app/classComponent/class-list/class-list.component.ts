import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from 'src/app/models/ui-models/class.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent {
  allClass: Class[] = [];
  displayedColumns: string[] = ['Name','edit'];
  dataSource: MatTableDataSource<Class> = new MatTableDataSource<Class>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';
constructor(){
}

filterClasses(){

}


}
