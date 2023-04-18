import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  login(data:any)
    {
     console.log(data.email);
     localStorage.setItem("email",data.email);
  }
  private baseUrl: string;

  constructor(
    private http: HttpClient

  )  { this.baseUrl = 'http://localhost:8088/users' }
  signup(data:any)
  {
    console.log(data);
    return this.http.post(this.baseUrl +"/user/new",data,{headers: new HttpHeaders().set('Content-Type','application/json')})
  }
  

  public getCurrentUserDetails(email: any): Observable<UserModel[]> {
    const url = this.baseUrl + '/me/' + email
    const header = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get<UserModel[]>(url, { headers: header })
  }
}