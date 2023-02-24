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

  delete(id: any): Observable<any>{
    const url = (`${this.apiUrl}/delete/${id}`);
    return this.http.post(url, {})
  }

  sofdel(data: number): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/delete`, {data})
  }
  
  Logindata(): Observable<any>{
    return this.http.get(`${this.apiUrl}/get-data`);
  }  


  public getLogindata(): Observable<any>{
    return this.http.get(`${this.apiUrl}/get-data`);
  }  

  public postLogindata(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/store-data`, data);
  }

  public updateLogindata(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/update-data`,data);
  }

  public deleteLogindata(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/delete-data`, data);
  }
  }
