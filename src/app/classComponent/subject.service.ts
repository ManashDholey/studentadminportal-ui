import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from '../models/ui-models/subject.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseApiUrl:string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.baseApiUrl + '/Subjects');
  }

  getById(Id: string): Observable<Subject> {
    return this.httpClient.get<Subject>(this.baseApiUrl + '/Subjects/' + Id)
  }

  update(Id: string, subjectRequest: Subject): Observable<Subject> {
    const updateSubjectRequest: Subject = {
      ClassDetailId: subjectRequest.ClassDetailId,
      Id: Id,
      Status: subjectRequest.Status,
      SubjectName : subjectRequest.SubjectName
    }

    return this.httpClient.put<Subject>(this.baseApiUrl + '/Subjects/' + Id, updateSubjectRequest);
  }

  delete(Id: string): Observable<Subject> {
    return this.httpClient.delete<Subject>(this.baseApiUrl + '/Subjects/' + Id);
  }

  add(subjectRequest: Subject): Observable<Subject> {
    subjectRequest.Status = true;
    const addClassRequest: Subject = {
      SubjectName: subjectRequest.SubjectName,
      ClassDetailId:subjectRequest.ClassDetailId ,
      Id:Guid.create().toString(),
      Status: subjectRequest.Status
    };
    return this.httpClient.post<Subject>(this.baseApiUrl + '/Subjects/Add', addClassRequest);
  }
}
