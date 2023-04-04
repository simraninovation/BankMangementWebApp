import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string;

  constructor(
    private http: HttpClient

  ) { this.baseUrl = 'http://localhost:8088/users' }

  public getCurrentUserDetails(email: any): Observable<UserModel[]> {
    const url = this.baseUrl + '/me/' + email
    const header = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get<UserModel[]>(url, { headers: header })
  }
}