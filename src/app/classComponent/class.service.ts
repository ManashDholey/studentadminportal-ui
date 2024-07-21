import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Class } from '../models/ui-models/class.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private baseApiUrl:string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAllClass(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(this.baseApiUrl + '/Class');
  }

  getClass(classId: string): Observable<Class> {
    return this.httpClient.get<Class>(this.baseApiUrl + '/Class/' + classId)
  }

  updateClass(classId: string, classRequest: Class): Observable<Class> {
    const updateClassRequest: Class = {
      name: classRequest.name,
      id: '',
      status: classRequest.status
    }

    return this.httpClient.put<Class>(this.baseApiUrl + '/Class/' + classId, updateClassRequest);
  }

  deleteClass(classId: string): Observable<Class> {
    return this.httpClient.delete<Class>(this.baseApiUrl + '/Class/' + classId);
  }

  addClass(classRequest: Class): Observable<Class> {
    const addClassRequest: Class = {
      name: classRequest.name,
      id: '',
      status: classRequest.status
    };
    return this.httpClient.post<Class>(this.baseApiUrl + '/Class/Add', addClassRequest);
  }
}
