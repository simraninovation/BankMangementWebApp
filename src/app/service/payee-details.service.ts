import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PayeeDetails } from '../model/payeeDetails-module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PayeeDetailsService {
  private baseUrl: string;
  private data1=new Subject<any>();

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

  public createPayee(payee:any):Observable<any>{
    const url = this.baseUrl +'/payee/create'
    const header ={
      'Authorization' : 'Bearer '+ localStorage.getItem('token')

     }
     let options = { headers: header }
    return this.http.post<any>(url,payee,options)
    

  }
  public deleteById(accountId:number){
    const header ={
      'Authorization' : 'Bearer '+ localStorage.getItem('token')
     }
     let options = { headers: header }
    return this.http.delete(this.baseUrl+'/payee/delete/'+accountId,options);
  }
  public setexistPayeeDetails(data:any)
  {
    console.log(data);
  this.data1.next(data);
  }
  public getexistPayeeDetails()
  {
  
    return this.data1;
  }
  public update(payee:any)
  {
  const url = this.baseUrl +'/payee/update'
  const header ={
    'Authorization' : 'Bearer '+ localStorage.getItem('token')
   }
   let options = { headers: header }
  return this.http.put(url,payee,options)

}

}

