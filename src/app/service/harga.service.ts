import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pemeriksaan } from '../api/pemeriksaan';

@Injectable({
  providedIn: 'root'
})
export class HargaService {

  constructor(private http: HttpClient) { }

  getPemeriksaan() {
    return this.http.get<any>('assets/demo/data/pemeriksaan.json')
    .toPromise()
    .then(res => <Pemeriksaan[]>res.data)
    .then(data => { return data; });
}

//   generatePemeriksaan(): Pemeriksaan {
//     const pemeriksaan: Pemeriksaan =  {
//         id: this.generateId(),
//         pemeriksaan: this.generateName(),
//         harga: this.generateHarga(),
//     };
//     return pemeriksaan;
// }

//   generateId() {
//     let text = "";
//     let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
//     for (var i = 0; i < 5; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
    
//     return text;
// }

// generateName() {
//     return this.PemeriksaanNama[Math.floor(Math.random() * Math.floor(30))];
// }

// generateHarga() {
//     return Math.floor(Math.random() * Math.floor(299)+1);
// }
}
