import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    serverUrl: 'http://localhost:3000'; //localhost
  constructor(public http:HttpClient) { }

  login(username: any, password:any){
    return this.http.post(`${this.serverUrl}/get-data`, { username, password });
  }
}
