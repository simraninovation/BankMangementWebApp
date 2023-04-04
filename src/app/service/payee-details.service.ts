import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PayeeDetails } from '../model/payeeDetails-module';

@Injectable({
  providedIn: 'root'
})
export class PayeeDetailsService {
  private baseUrl: string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://localhost:8088'
  }
  public gettPayeeDetails(accountId:any): Observable<PayeeDetails[]>{
    const url = this.baseUrl + '/payee/account/' + accountId
    const header = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get<PayeeDetails[]>(url, { headers: header })
}
}
