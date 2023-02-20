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

  register(karyawan: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register`, karyawan);
  };


  public getLoginkaryawan(): Observable<any>{
    return this.http.get(`${this.apiUrl}/get-karyawan`);
  }  

  public postLoginkaryawan(karyawan:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/store-karyawan`, karyawan);
  }

  public updateLoginkaryawan(karyawan:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/update-karyawan`,karyawan);
  }

  public deleteLoginkaryawan(karyawan:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/delete-karyawan`, karyawan);
  }
  }
