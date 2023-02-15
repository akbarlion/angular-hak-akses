import { Component, OnInit } from '@angular/core';
import { Datakaryawan } from 'src/app/api/datakaryawan';
import { KaryawanService } from 'src/app/service/karyawan.service';

@Component({
  selector: 'app-tabelbiasa',
  templateUrl: './tabelbiasa.component.html',
  styleUrls: ['./tabelbiasa.component.scss']
})
export class TabelbiasaComponent implements OnInit {
  
  products: Datakaryawan[];

  constructor(private productService: KaryawanService) { }

  ngOnInit() {
      this.productService.getKaryawan().then(data => this.products = data);
  }
}
