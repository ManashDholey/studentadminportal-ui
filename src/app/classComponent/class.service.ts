import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Class } from '../models/ui-models/class.model';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';
import { ClassParams } from '../models/ui-models/class-params';
import { Pagination } from '../models/ui-models/pagination';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private baseApiUrl:string = environment.apiUrl;
  classParams = new ClassParams();
  constructor(private httpClient: HttpClient) { }

  getAllClass(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(this.baseApiUrl + '/Class');
  }
  setClassParams(params: ClassParams) {
    this.classParams = params;
  }

  getClassParams() {
    return this.classParams;
  }
  getAllClassWithPaging(): Observable<Pagination<Class[]>> {
    let params = new HttpParams();

    
    if(this.classParams.sort.active)
    params = params.append('active', this.classParams.sort.active);
    // else
    // params = params.append('active', 'firstname');
    if(this.classParams.sort.direction)
    params = params.append('direction', this.classParams.sort.direction);
    // else
    // params = params.append('direction', 'asc');
    params = params.append('pageIndex', this.classParams.pageNumber);
    params = params.append('pageSize', this.classParams.pageSize);
    if (this.classParams.search) params = params.append('search', this.classParams.search);
    return this.httpClient.get<Pagination<Class[]>>(this.baseApiUrl + '/Class');
  }

  getClass(classId: string): Observable<Class> {
    return this.httpClient.get<Class>(this.baseApiUrl + '/Class/' + classId)
  }

  updateClass(classId: string, classRequest: Class): Observable<Class> {
    const updateClassRequest: Class = {
      className: classRequest.className,
      id: classId,
      status: classRequest.status
    }

    return this.httpClient.put<Class>(this.baseApiUrl + '/Class/' + classId, updateClassRequest);
  }

  deleteClass(classId: string): Observable<Class> {
    return this.httpClient.delete<Class>(this.baseApiUrl + '/Class/' + classId);
  }

  addClass(classRequest: Class): Observable<Class> {
    classRequest.status = true;
    const addClassRequest: Class = {
      className: classRequest.className,
      id:Guid.create().toString(),
      status: classRequest.status
    };
    return this.httpClient.post<Class>(this.baseApiUrl + '/Class/Add', addClassRequest);
  }
}
