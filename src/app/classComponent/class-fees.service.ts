import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClassFees } from '../models/ui-models/class.fee';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ClassFeesService {
  private baseApiUrl:string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAllClassFees(): Observable<ClassFees[]> {
    return this.httpClient.get<ClassFees[]>(this.baseApiUrl + '/ClassFee');
  }

  getClassFees(classFeeId: string): Observable<ClassFees> {
    return this.httpClient.get<ClassFees>(this.baseApiUrl + '/ClassFee/' + classFeeId)
  }

  updateClassFees(classFeeId: string, classRequest: ClassFees): Observable<ClassFees> {
    const updateClassRequest: ClassFees = {
      classDetailId: classRequest.classDetailId,
      id: classFeeId,
      feeAmount: classRequest.feeAmount
    }

    return this.httpClient.put<ClassFees>(this.baseApiUrl + '/ClassFee/' + classFeeId, updateClassRequest);
  }

  deleteClassFees(classFeesId: string): Observable<ClassFees> {
    return this.httpClient.delete<ClassFees>(this.baseApiUrl + '/ClassFee/' + classFeesId);
  }

  addClassFees(classRequest: ClassFees): Observable<ClassFees> {
    
    const addClassRequest: ClassFees = {
      classDetailId: classRequest.classDetailId,
      id:Guid.create().toString(),
      feeAmount: classRequest.feeAmount
    };
    return this.httpClient.post<ClassFees>(this.baseApiUrl + '/ClassFee/Add', addClassRequest);
  }
}
