import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pemeriksaan } from '../api/pemeriksaan';

@Injectable({
  providedIn: 'root'
})
export class HargaService {

  constructor(private http: HttpClient) { }

  getPemeriksaan(){
    return this.http.get<any>('assets/demo/data/pemeriksaan.json').
    toPromise()
    .then(res => res.data as Pemeriksaan[])
    .then(data => data);
  }
}
