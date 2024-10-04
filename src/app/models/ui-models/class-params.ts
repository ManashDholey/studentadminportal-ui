import { Sort } from "./sort.model";

export class ClassParams {
    sort: Sort = new Sort();
    pageNumber:number = 1;
    pageSize:number = 5;
    search:string = '';
}
