import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';



@NgModule({
  declarations: [ExpenseComponent,],
  imports: [
    CommonModule
  ],
  exports:[ExpenseComponent,]
})
export class ExpenseModule { }
