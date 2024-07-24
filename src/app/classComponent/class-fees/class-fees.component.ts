import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassFees } from 'src/app/models/ui-models/class.fee';
import { Class } from 'src/app/models/ui-models/class.model';
import { ClassService } from '../class.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-fees',
  templateUrl: './class-fees.component.html',
  styleUrls: ['./class-fees.component.css']
})
export class ClassFeesComponent implements OnInit {
  classFeeId: string | null | undefined;
  class$:Observable<Class[]> | undefined; 
  header:string = '';
  classFee:ClassFees = {id:'',ClassDetailId:'',FeeAmount:0};
  isNewClass = false;
  constructor(private classService: ClassService, private readonly route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.header = 'Add Class Fee';
    this.class$ = this.classService.getAllClass();
    this.route.paramMap.subscribe(
      (params) => {
        this.classFeeId = params.get('id');
        if (this.classFeeId) {
          if (this.classFeeId.toLowerCase() === 'Add'.toLowerCase()) {
            // -> new Student Functionality
            this.isNewClass = true;
            this.header = 'Add New Class Fee';
          } else {
            this.isNewClass = false;
            this.header = 'Edit Class Fee';
          }
        }
      })
  }
  
  onUpdate(): void{

  }
  onDelete(): void {

  }
  onAdd(): void{
    
  }

}
