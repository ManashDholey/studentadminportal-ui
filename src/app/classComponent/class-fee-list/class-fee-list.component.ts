import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassFees } from 'src/app/models/ui-models/class.fee';
import { ClassFeesService } from '../class-fees.service';

@Component({
  selector: 'app-class-fee-list',
  templateUrl: './class-fee-list.component.html',
  styleUrls: ['./class-fee-list.component.css']
})
export class ClassFeeListComponent {
  allClassFees: ClassFees[] = [];
  displayedColumns: string[] = [
    'className',
    'FeeAmount','Edit'];
  dataSource: MatTableDataSource<ClassFees> = new MatTableDataSource<ClassFees>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';
constructor(private classFeesService: ClassFeesService){
}
  ngOnInit(): void {
    this.classFeesService.getAllClassFees().subscribe((successResponse) => {
      this.allClassFees = successResponse;
      console.log(this.allClassFees);
      this.dataSource = new MatTableDataSource<ClassFees>(this.allClassFees);

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

  filterClassFees(){
  this.dataSource.filter = this.filterString.trim().toLowerCase();
}


}
