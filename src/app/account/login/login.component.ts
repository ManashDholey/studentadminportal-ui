import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(12)])
  })
  returnUrl: string ='';
  constructor(private formBuilder: FormBuilder,private accountService: AccountService, private router: Router, 
    private activatedRoute: ActivatedRoute){
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'
    }
  
  get loginFormData() {
    return this.loginForm.controls;
  }
  
  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      password:['', [Validators.required, Validators.minLength(12)]]
     });
  }
  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigateByUrl(this.returnUrl)
    })
  }
}
