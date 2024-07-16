import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [TopNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports:[TopNavComponent]
})
export class LayoutModule { }
