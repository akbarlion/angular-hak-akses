import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  private apiUrl = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }
  
   login(username: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, {username, password});
  };

  register(data: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  };


  public getLoginData(): Observable<any>{
    return this.http.get(`${this.apiUrl}/get-data`);
  }  

  public postLoginData(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/store-data`, data);
  }

  public updateLoginData(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/update-data`,data);
  }

  public deleteLoginData(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/delete-data`, data);
  }
  }
