import { Class } from "./class.model"

export interface Subject {
    id: string,
    subjectName:string,
    classDetailId: string,
    classDetail?: Class,
    status:boolean
  }