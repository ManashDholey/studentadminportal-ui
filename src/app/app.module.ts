import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { StudentsModule } from './students/students.module';
// import { TopNavComponent } from './layout/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
   // TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
