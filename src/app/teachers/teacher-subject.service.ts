import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeacherSubject } from '../models/ui-models/teacher.subject.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectService {

  private baseApiUrl:string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<TeacherSubject[]> {
    return this.httpClient.get<TeacherSubject[]>(this.baseApiUrl + '/TeachersSubject');
  }
  
  
  getById(Id: string): Observable<TeacherSubject> {
    return this.httpClient.get<TeacherSubject>(this.baseApiUrl + '/TeachersSubject/' + Id)
  }

  update(Id: string, teacherSubjectRequest: TeacherSubject): Observable<TeacherSubject> {
    const updateTeacherSubjectRequest: TeacherSubject = {
      id: Id,
      classDetailId :teacherSubjectRequest.classDetailId,
      subjectId: teacherSubjectRequest.subjectId,
      teacherId: teacherSubjectRequest.teacherId,
      updateDate:new Date(),
      
    }

    return this.httpClient.put<TeacherSubject>(this.baseApiUrl + '/TeachersSubject/' + Id, updateTeacherSubjectRequest);
  }

  delete(Id: string): Observable<TeacherSubject> {
    return this.httpClient.delete<TeacherSubject>(this.baseApiUrl + '/TeachersSubject/' + Id);
  }

  add(teacherSubjectRequest: TeacherSubject): Observable<TeacherSubject> {
   
    const addTeacherSubjectRequest: TeacherSubject = {
      id: Guid.create().toString(),
      classDetailId :teacherSubjectRequest.classDetailId,
      subjectId: teacherSubjectRequest.subjectId,
      teacherId: teacherSubjectRequest.teacherId,
      updateDate:new Date(),
      createDate:new Date(),
    };
    return this.httpClient.post<TeacherSubject>(this.baseApiUrl + '/TeachersSubject/Add', addTeacherSubjectRequest);
  }
}
