import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersAddComponent } from './teachers-add/teachers-add.component';
import { TeachersSubjectComponent } from './teachers-subject/teachers-subject.component';
import { TeachersAttendanceComponent } from './teachers-attendance/teachers-attendance.component';



@NgModule({
  declarations: [TeachersListComponent, TeachersAddComponent, TeachersSubjectComponent, TeachersAttendanceComponent,],
  imports: [
    CommonModule
  ],
  exports:[TeachersListComponent, TeachersAddComponent, TeachersSubjectComponent,]
})
export class TeachersModule { }
