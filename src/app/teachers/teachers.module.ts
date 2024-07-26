import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersAddComponent } from './teachers-add/teachers-add.component';
import { TeachersSubjectComponent } from './teachers-subject/teachers-subject.component';
import { TeachersAttendanceComponent } from './teachers-attendance/teachers-attendance.component';
import { TeachersAttendanceAddComponent } from './teachers-attendance-add/teachers-attendance-add.component';
import { TeachersSubjectAddComponent } from './teachers-subject-add/teachers-subject-add.component';



@NgModule({
  declarations: [TeachersListComponent, TeachersAddComponent, TeachersSubjectComponent, TeachersAttendanceComponent, TeachersAttendanceAddComponent, TeachersSubjectAddComponent,],
  imports: [
    CommonModule
  ],
  exports:[TeachersListComponent, TeachersAddComponent, TeachersSubjectComponent,]
})
export class TeachersModule { }
