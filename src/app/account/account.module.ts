import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatCardModule,
     MatInputModule,
     MatFormFieldModule, 
     NgIf, 
     FormsModule,
     ReactiveFormsModule,
      MatButtonModule,
      MatDividerModule
  ]
})
export class AccountModule { }
