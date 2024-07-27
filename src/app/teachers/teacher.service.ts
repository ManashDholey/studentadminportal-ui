import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teachers } from '../models/ui-models/teachers.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseApiUrl:string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Teachers[]> {
    return this.httpClient.get<Teachers[]>(this.baseApiUrl + '/Teachers');
  }

  getById(Id: string): Observable<Teachers> {
    return this.httpClient.get<Teachers>(this.baseApiUrl + '/Teachers/' + Id)
  }

  update(Id: string, teacherRequest: Teachers): Observable<Teachers> {
    const updateTeacherRequest: Teachers = {
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

    return this.httpClient.put<Teachers>(this.baseApiUrl + '/Teachers/' + Id, updateTeacherRequest);
  }

  delete(Id: string): Observable<Teachers> {
    return this.httpClient.delete<Teachers>(this.baseApiUrl + '/Teachers/' + Id);
  }

  add(teacherRequest: Teachers): Observable<Teachers> {
   
    const addClassRequest: Teachers = {
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
    return this.httpClient.post<Teachers>(this.baseApiUrl + '/Teachers/Add', addClassRequest);
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
