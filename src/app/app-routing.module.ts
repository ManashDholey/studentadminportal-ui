import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { ClassListComponent } from './classComponent/class-list/class-list.component';
import { ClassAddComponent } from './classComponent/class-add/class-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassFeesComponent } from './classComponent/class-fees/class-fees.component';
import { ClassFeeListComponent } from './classComponent/class-fee-list/class-fee-list.component';
import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';
import { TeachersAddComponent } from './teachers/teachers-add/teachers-add.component';
import { TeachersAttendanceComponent } from './teachers/teachers-attendance/teachers-attendance.component';
import { TeachersSubjectComponent } from './teachers/teachers-subject/teachers-subject.component';
import { TeachersSubjectAddComponent } from './teachers/teachers-subject-add/teachers-subject-add.component';
import { TeachersAttendanceAddComponent } from './teachers/teachers-attendance-add/teachers-attendance-add.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'students/:id',
    component: ViewStudentComponent
  },
  {
    path:'class',
    component:ClassListComponent
  },
  {
    path:'class/:id',
    component:ClassAddComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'class-fee/:id',
    component:ClassFeesComponent
  },
  {
    path:'teachers',
    component:TeachersListComponent
  },
  {
    path:'teachers/:id',
    component:TeachersAddComponent
  },
  {
    path:'teachers-attendance',
    component:TeachersAttendanceComponent
  },
  {
    path:'teachers-attendance/:id',
    component:TeachersAttendanceAddComponent
  },
  {
    path:'teachers-subject',
    component:TeachersSubjectComponent
  },
  {
    path:'teachers-subject/:id',
    component:TeachersSubjectAddComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
