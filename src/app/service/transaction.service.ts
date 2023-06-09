import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { accountModel } from '../model/account-model';
import{transactionModel}  from '../model/transaction-model'


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl: string;

  constructor(private http:HttpClient) {    
    
    this.baseUrl = 'http://localhost:8088'
   }
  public gettransactionDetails(accountId:any,accountNumber:any): Observable<transactionModel[]>{
    const url = this.baseUrl + '/transaction/' + accountId + '/' +accountNumber
    const header = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get<transactionModel[]>(url, { headers: header })
}
public transferedAmount(transactionModel:any): Observable<any>{
  let url = this.baseUrl + '/transactions/new' 
  const header = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
  return this.http.post(url,transactionModel, {headers:header})
  
}
}
