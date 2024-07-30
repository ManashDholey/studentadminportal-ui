import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/ui-models/expense.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseApiUrl:string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(this.baseApiUrl + '/Expense');
  }
  
  
  getById(Id: string): Observable<Expense> {
    return this.httpClient.get<Expense>(this.baseApiUrl + '/Expense/' + Id)
  }

  update(Id: string, expenseRequest: Expense): Observable<Expense> {
    const updateExpenseRequest: Expense = {
      id: Id,
      classDetailId :expenseRequest.classDetailId,
      subjectId: expenseRequest.subjectId,
      chargeAmount:expenseRequest.chargeAmount
    }
    return this.httpClient.put<Expense>(this.baseApiUrl + '/Expense/' + Id, updateExpenseRequest);
  }

  delete(Id: string): Observable<Expense> {
    return this.httpClient.delete<Expense>(this.baseApiUrl + '/Expense/' + Id);
  }

  add(expenseRequest: Expense): Observable<Expense> {
   
    const addExpenseRequest: Expense = {
      id: Guid.create().toString(),
      classDetailId :expenseRequest.classDetailId,
      subjectId: expenseRequest.subjectId,
      chargeAmount:expenseRequest.chargeAmount
    };
    //console.log(addExpenseRequest);
    return this.httpClient.post<Expense>(this.baseApiUrl + '/Expense/Add', addExpenseRequest);
  }
}
