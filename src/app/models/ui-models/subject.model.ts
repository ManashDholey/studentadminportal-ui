import { Class } from "./class.model"

export interface Subject {
    Id: string,
    SubjectName:string,
    ClassDetailId: string,
    ClassDetail?: Class,
    Status:boolean
  }