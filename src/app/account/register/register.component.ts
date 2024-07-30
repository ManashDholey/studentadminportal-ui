import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { debounceTime, finalize, map, switchMap, take } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errors: string[] | null = null;
  complexPassword = "(?=^.{6,25}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$";
  registerForm = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email], [this.validateEmailNotTaken()]),
    password:new FormControl('', [Validators.required, Validators.pattern(this.complexPassword)]),
  });  
  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) {}

  

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: error => this.errors = error.errors
    })
  }

  validateEmailNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(1000),
        take(1),
        switchMap(() => {
          return this.accountService.checkEmailExists(control.value).pipe(
            map(result => result ? {emailExists: true} : null),
            finalize(() => control.markAsTouched())
          )
        })
      )
    }
  }
}
