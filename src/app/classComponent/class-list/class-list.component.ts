import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from 'src/app/models/ui-models/class.model';
import { ClassService } from '../class.service';
import { ClassParams } from 'src/app/models/ui-models/class-params';

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
  classParams: ClassParams = new ClassParams; 
  totalCount =0;
  pageEvent: PageEvent = new PageEvent();
constructor(private classService: ClassService){
  this.classParams = classService.getClassParams();
}
ngAfterViewInit() {
  this.dataSource.sort = this.matSort;
  this.matSort.sortChange.subscribe(event => this.sortData(event));
}
sortData(event: any) {
  console.log('Sort event: ', event);
  // Handle the sort event here
  this.classParams = this.classService.getClassParams();
  if(event){
    if (event.direction !== '') {
      this.classParams.sort.active = event.active;
      this.classParams.sort.direction = event.direction;
      this.classService.setClassParams(this.classParams);
      this.classService.getAllClassWithPaging().subscribe({
      next: (response) => { this.allClass = response.data.flat();
       // console.log("this.products===>",this.students);
        this.totalCount = response.count;
        this.classParams.pageNumber = response.pageIndex;
        this.classParams.pageSize = response.pageSize;
        this.dataSource = new MatTableDataSource<Class>(this.allClass);
        },
      error: error => console.log(error),
    });
   }
  }
  
}
  ngOnInit(): void {
    this.classService.getAllClassWithPaging().subscribe((successResponse) => {
      this.allClass = successResponse.data;
      this.dataSource = new MatTableDataSource<Class>(this.allClass);
      this.totalCount = successResponse.count;
      this.classParams.pageNumber=successResponse.pageIndex;
      this.classParams.pageSize=successResponse.pageSize;
      // if (this.matPaginator) {
      //   this.dataSource.paginator = this.matPaginator;
      // }

      // if (this.matSort) {
      //   this.dataSource.sort = this.matSort;
      // }
    },
    (errorResponse) => {
      console.log(errorResponse);
    })
  }
  onPaginateChange(event: PageEvent) {
    console.log(event);
    this.classParams = this.classService.getClassParams();
    this.classParams.pageNumber = event.pageIndex;
    this.classParams.pageSize = event.pageSize;
    if(this.filterString)
      this.classParams.search  = this.filterString.trim().toLowerCase();
      this.classParams.pageNumber = this.classParams.pageNumber +1;
      this.classService.setClassParams(this.classParams);
      this.classService.getAllClassWithPaging().subscribe({
        next: (response) => { this.allClass = response.data.flat();
         // console.log("this.products===>",this.students);
          this.totalCount = response.count;
          this.classParams.pageNumber=response.pageIndex;
          this.classParams.pageSize=response.pageSize;
          this.dataSource = new MatTableDataSource<Class>(this.allClass);
          },
        error: error => console.log(error),
      });
  }
  

filterClasses(){
  this.classParams.search  = this.filterString.trim().toLowerCase();
}


}
