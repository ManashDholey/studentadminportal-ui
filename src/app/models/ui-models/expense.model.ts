
import { Class } from "./class.model"
import { Subject } from "./subject.model"

export interface Expense {
    id: string,
    classDetailId?:string,
    classDetail?:Class,
    subjectId?:string,
    subject?:Subject,
    chargeAmount:Number
  }