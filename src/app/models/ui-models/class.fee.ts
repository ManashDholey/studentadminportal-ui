import { Class } from "./class.model"

export interface ClassFees {
    id: string,
    classDetailId: string,
    classDetail?: Class
    feeAmount:Number
  }