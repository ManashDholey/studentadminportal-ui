import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { User } from 'src/app/models/ui-models/user';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  
})
export class TopNavComponent implements OnInit {
  user!: User | null;  
opened:boolean = false; 
private currentUserSource = new ReplaySubject<User | null>(1);
currentUser$ = this.currentUserSource.asObservable();
constructor(public accountService:AccountService){
  this.currentUser$ = accountService.currentUser$;
}
  ngOnInit(): void {
  this.currentUser$.subscribe((successResponse) => {
    this.user = successResponse;
  },
  (errorResponse) => {
    this.user = null;
  })
  }
 togalFlag(){
  if(!this.opened){
    this.opened = true;
  }else{
    this.opened = false;
  }
  console.log(this.opened);
 }
   
}
