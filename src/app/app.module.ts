import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { StudentsModule } from './students/students.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ClassModuleModule } from './classComponent/class-module/class-module.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ExpenseModule } from './expense/expense.module';
import { TeachersModule } from './teachers/teachers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StudentsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ClassModuleModule,
    DashboardModule,
    ExpenseModule,
    TeachersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
