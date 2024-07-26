import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';



@NgModule({
  declarations: [ExpenseComponent, ExpenseAddComponent,],
  imports: [
    CommonModule
  ],
  exports:[ExpenseComponent,]
})
export class ExpenseModule { }
