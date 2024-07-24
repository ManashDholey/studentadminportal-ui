import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassListComponent } from '../class-list/class-list.component';
import { ClassAddComponent } from '../class-add/class-add.component';
import { RouterModule } from '@angular/router';
import {  MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ClassFeesComponent } from '../class-fees/class-fees.component';
import { MatSelectModule } from '@angular/material/select';
import { ClassFeeListComponent } from '../class-fee-list/class-fee-list.component';


@NgModule({
  declarations: [ClassListComponent,
    ClassAddComponent,ClassFeesComponent,ClassFeeListComponent,],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
     MatSelectModule
    // MatRadioModule,
  ],
  exports:[ClassListComponent,ClassAddComponent,ClassFeesComponent,ClassFeeListComponent,]
})
export class ClassModuleModule { }
