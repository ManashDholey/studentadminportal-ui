import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { ClassListComponent } from './classComponent/class-list/class-list.component';
import { ClassAddComponent } from './classComponent/class-add/class-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassFeesComponent } from './classComponent/class-fees/class-fees.component';
import { ClassFeeListComponent } from './classComponent/class-fee-list/class-fee-list.component';

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
    path:'class-fee-list',
    component:ClassFeeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
