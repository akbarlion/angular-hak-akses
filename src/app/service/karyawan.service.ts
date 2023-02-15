import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Datakaryawan } from '../api/datakaryawan';

@Injectable()
export class KaryawanService {

    constructor(private http: HttpClient) { }

    getKaryawan() {
        return this.http.get<any>('assets/demo/data/karyawan.json')
        .toPromise()
        .then(res => res.data as Datakaryawan[])
        .then(data => data);
    }
}
