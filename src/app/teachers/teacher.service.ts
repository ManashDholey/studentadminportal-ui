import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/ui-models/teacher.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseApiUrl:string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.baseApiUrl + '/Teachers');
  }

  getById(Id: string): Observable<Teacher> {
    return this.httpClient.get<Teacher>(this.baseApiUrl + '/Teachers/' + Id)
  }

  update(Id: string, teacherRequest: Teacher): Observable<Teacher> {
    const updateTeacherRequest: Teacher = {
      email: teacherRequest.email,
      id: Id,
      address: teacherRequest.address,
      dateOfBirth : teacherRequest.dateOfBirth,
      genderId:teacherRequest.genderId,
      lastName: teacherRequest.lastName,
      mobile:teacherRequest.mobile,
      firstName:teacherRequest.firstName,
      profileImageUrl:teacherRequest.profileImageUrl
    }

    return this.httpClient.put<Teacher>(this.baseApiUrl + '/Teachers/' + Id, updateTeacherRequest);
  }

  delete(Id: string): Observable<Teacher> {
    return this.httpClient.delete<Teacher>(this.baseApiUrl + '/Teachers/' + Id);
  }

  add(teacherRequest: Teacher): Observable<Teacher> {
   
    const addClassRequest: Teacher = {
      email: teacherRequest.email,
      id: Guid.create.toString(),
      address: teacherRequest.address,
      dateOfBirth : teacherRequest.dateOfBirth,
      genderId:teacherRequest.genderId,
      lastName: teacherRequest.lastName,
      mobile:teacherRequest.mobile,
      firstName:teacherRequest.firstName,
      profileImageUrl:teacherRequest.profileImageUrl
    };
    return this.httpClient.post<Teacher>(this.baseApiUrl + '/Teachers/Add', addClassRequest);
  }
  uploadImage(teacherId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append("profileImage", file);

    return this.httpClient.post(this.baseApiUrl + '/Teachers/' + teacherId + '/upload-image',
      formData, {
      responseType: 'text'
    }
    );
  }

  getImagePath(relativePath: string) {
    return `${this.baseApiUrl}/${relativePath}`;
  }
}
