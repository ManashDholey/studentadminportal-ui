import { Sort } from "./sort.model";

export class StudentParams {
    genderId:string = '';
    sort: Sort = new Sort();
    pageNumber:number = 1;
    pageSize:number = 10;
    search:string = '';
}
