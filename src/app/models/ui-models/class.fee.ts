import { Class } from "./class.model"

export interface ClassFees {
    id: string,
    ClassDetailId: string,
    ClassDetail?: Class
    FeeAmount:Number
  }