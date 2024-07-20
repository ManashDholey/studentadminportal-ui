import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  
})
export class TopNavComponent {
opened:boolean = false; 
constructor(){}
 togalFlag(){
  if(!this.opened){
    this.opened = true;
  }else{
    this.opened = false;
  }
  console.log(this.opened);
 }

}
