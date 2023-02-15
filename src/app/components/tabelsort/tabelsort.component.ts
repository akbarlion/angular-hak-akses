import { Component, OnInit } from '@angular/core';
import { Datakaryawan } from 'src/app/api/datakaryawan';
import { KaryawanService } from 'src/app/service/karyawan.service'
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-tabelsort',
  templateUrl: './tabelsort.component.html',
  styleUrls: ['./tabelsort.component.scss']
})
export class TabelsortComponent implements OnInit {
  karyawan : Datakaryawan[];

  constructor(private karService: KaryawanService) { }

  ngOnInit(): void {
    this.karService.getKaryawan().then(data => this.karyawan = data)
  }
  customSort (event: SortEvent){
    event.data.sort((data1,data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 == 'string' && typeof value2 == 'string')
        result = value1.localeCompare(value2);
      else 
      result = (value1 < value2) ? -1 : (value1 > value2 ) ? 1 : 0;

      return (event.order * result)
    });
  }

}
