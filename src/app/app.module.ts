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
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesComponent } from './public/services/services.component';
import { ProjectComponent } from './public/project/project.component';
import { AboutComponent } from './public/about/about.component';
import { ContractComponent } from './public/contract/contract.component';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ProjectComponent,
    AboutComponent,
    ContractComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StudentsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    ClassModuleModule,
    DashboardModule,
    ExpenseModule,
    TeachersModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
