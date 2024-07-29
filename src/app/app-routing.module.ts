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
import { StudentAttendanceComponent } from './students/student-attendance/student-attendance.component';
import { StudentAttendanceAddComponent } from './students/student-attendance-add/student-attendance-add.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseAddComponent } from './expense/expense-add/expense-add.component';
import { SubjectsComponent } from './classComponent/subjects/subjects.component';
import { SubjectAddComponent } from './classComponent/subject-add/subject-add.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './core/auth.guard';
import { ServicesComponent } from './public/services/services.component';
import { ProjectComponent } from './public/project/project.component';
import { AboutComponent } from './public/about/about.component';
import { ContractComponent } from './public/contract/contract.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [authGuard],
    component: HomeComponent
  },
  {
    path: 'services',
    // canActivate: [authGuard],
    component: ServicesComponent
  },
  {
    path: 'project',
    // canActivate: [authGuard],
    component: ProjectComponent
  },
  {
    path: 'about',
    // canActivate: [authGuard],
    component: AboutComponent
  },
  {
    path: 'contract',
    // canActivate: [authGuard],
    component: ContractComponent
  },
  {
    path: 'students',
    canActivate: [authGuard],
    component: StudentsComponent
  },
  {
    path: 'students/:id',
    canActivate: [authGuard],
    component: ViewStudentComponent
  },
  {
    path: 'students/:id',
    canActivate: [authGuard],
    component: ViewStudentComponent
  },
  {
    path: 'student-attendance',
    canActivate: [authGuard],
    component: StudentAttendanceComponent
  },
  {
    path: 'student-attendance/:id',
    canActivate: [authGuard],
    component: StudentAttendanceAddComponent
  },
  {
    path:'class',
    canActivate: [authGuard],
    component:ClassListComponent
  },
  {
    path:'class/:id',
    canActivate: [authGuard],
    component:ClassAddComponent
  },
  {
    path:'dashboard',
    canActivate: [authGuard],
    component:DashboardComponent
  },
  {
    path:'class-fee-list',
    canActivate: [authGuard],
    component:ClassFeeListComponent
  },
  {
    path:'class-fee/:id',
    canActivate: [authGuard],
    component:ClassFeesComponent
  },
  {
    path:'teachers',
    canActivate: [authGuard],
    component:TeachersListComponent
  },
  {
    path:'teachers/:id',
    canActivate: [authGuard],
    component:TeachersAddComponent
  },
  {
    path:'teachers-attendance',
    canActivate: [authGuard],
    component:TeachersAttendanceComponent
  },
  {
    path:'teachers-attendance/:id',
    canActivate: [authGuard],
    component:TeachersAttendanceAddComponent
  },
  {
    path:'teachers-subject',
    canActivate: [authGuard],
    component:TeachersSubjectComponent
  },
  {
    path:'teachers-subject/:id',
    canActivate: [authGuard],
    component:TeachersSubjectAddComponent
  },
  {
    path:'expense',
    canActivate: [authGuard],
    component:ExpenseComponent
  },
  {
    path:'expense/:id',
    canActivate: [authGuard],
    component:ExpenseAddComponent
  },
  {
    path:'subjects',
    canActivate: [authGuard],
    component:SubjectsComponent
  },
  {
    path:'subjects/:id',
    canActivate: [authGuard],
    component:SubjectAddComponent
  },
  {
    path:'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
