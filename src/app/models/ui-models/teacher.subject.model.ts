import { Data } from "@angular/router";
import { Class } from "./class.model";
import { Subject } from "./subject.model";
import { Teacher } from "./teacher.model";

export interface TeacherSubject {
     id:string,
     classDetailId :string
     classDetail?: Class
     subjectId:string
      subject? :Subject
      teacherId: string
     teacher?:Teacher 
     createDate?:Date
     updateDate?:Data,
  }