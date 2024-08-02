import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/api-models/student.model';
import { Observable } from 'rxjs';
import { UpdateStudentRequest } from '../models/api-models/update-student-request.model';
import { AddStudentRequest } from '../models/api-models/add-student-request.model';
import {environment} from '../../environments/environment';
import { Pagination } from '../models/ui-models/pagination';
import { StudentParams } from '../models/ui-models/student-params';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseApiUrl:string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  studentParams = new StudentParams();

  setStudentParams(params: StudentParams) {
    this.studentParams = params;
  }

  getStudentParams() {
    return this.studentParams;
  }
  getStudents(): Observable<Pagination<Student[]>> {
    let params = new HttpParams();

    if (this.studentParams.genderId) params = params.append('genderId', this.studentParams.genderId);
    params = params.append('sort', this.studentParams.sort);
    params = params.append('pageIndex', this.studentParams.pageNumber);
    params = params.append('pageSize', this.studentParams.pageSize);
    if (this.studentParams.search) params = params.append('search', this.studentParams.search);
    return this.httpClient.get<Pagination<Student[]>>(this.baseApiUrl + '/students',{params});
  }

  getStudent(studentId: string): Observable<Student> {
    return this.httpClient.get<Student>(this.baseApiUrl + '/students/' + studentId)
  }

  updateStudent(studentId: string, studentRequest: Student): Observable<Student> {
    const updateStudentRequest: UpdateStudentRequest = {
      firstName: studentRequest.firstName,
      lastName: studentRequest.lastName,
      dateOfBirth: studentRequest.dateOfBirth,
      email: studentRequest.email,
      mobile: studentRequest.mobile,
      genderId: studentRequest.genderId,
      physicalAddress: studentRequest.address.physicalAddress,
      postalAddress: studentRequest.address.postalAddress
    }

    return this.httpClient.put<Student>(this.baseApiUrl + '/students/' + studentId, updateStudentRequest);
  }

  deleteStudent(studentId: string): Observable<Student> {
    return this.httpClient.delete<Student>(this.baseApiUrl + '/students/' + studentId);
  }

  addStudent(studentRequest: Student): Observable<Student> {
    const addStudentRequest: AddStudentRequest = {
      firstName: studentRequest.firstName,
      lastName: studentRequest.lastName,
      dateOfBirth: studentRequest.dateOfBirth,
      email: studentRequest.email,
      mobile: studentRequest.mobile,
      genderId: studentRequest.genderId,
      physicalAddress: studentRequest.address.physicalAddress,
      postalAddress: studentRequest.address.postalAddress
    };

    return this.httpClient.post<Student>(this.baseApiUrl + '/students/add', addStudentRequest);
  }

  uploadImage(studentId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append("profileImage", file);

    return this.httpClient.post(this.baseApiUrl + '/students/' + studentId + '/upload-image',
      formData, {
      responseType: 'text'
    }
    );
  }

  getImagePath(relativePath: string) {
    return `${this.baseApiUrl}/${relativePath}`;
  }


}
