import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModule } from '../auth/auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;
  

  constructor(private http:HttpClient) {
    this.baseUrl = 'http://localhost:8088'
   }

   public getToken(data:any): Observable<any>{
    let url = this.baseUrl + '/authenticate' 
    return this.http.post(url,data)
   }

   public register(data:any) : Observable<any>{
    let url = this.baseUrl + '/register' 
    return this.http.post(url,data)
   }


}
