import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customerservice';
import { Customer } from 'src/app/api/customer';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Pemeriksaan } from 'src/app/api/pemeriksaan';
import { HargaService } from 'src/app/service/harga.service';

@Component({
  selector: 'app-hug',
  templateUrl: './hug.component.html',
  styleUrls: ['./hug.component.scss']
})
export class HugComponent implements OnInit {
  selectedTindakan: any;
  selectedPemeriksaan:any;
  selectedHarga: any;
  dataSource: Pemeriksaan[];
  Pemeriksaan = [];
  totalRecords: number;
  cols: any[];
  loading: boolean;
  checked: boolean;
  selectAll: boolean;
  displayModal: boolean
  

  constructor(
    private customerService: CustomerService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private hargaService: HargaService
  ) { }

  ngOnInit(): void {
    this.hargaService.getPemeriksaan().then(data => {
      this.dataSource = data;
      this.totalRecords = data.length;
  });
  this.datadrop()
}

  datadrop(){
    this.hargaService.getPemeriksaan().then (data => this.dataSource = data);
    this.dataSource = [];
    this.primengConfig.ripple = true;
  }
  showDialog(){
    this.displayModal= true
  }

loadCustomers(event: LazyLoadEvent) {  
  this.loading = true;

  //in a real application, make a remote request to load data using state metadata from event
  //event.first = First row offset
  //event.rows = Number of rows per page
  //event.sortField = Field name to sort with
  //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
  //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

  //imitate db connection over a network
  setTimeout(() => {
      if (this.dataSource) {
          this.Pemeriksaan = this.dataSource.slice(event.first, (event.first + event.rows));
          this.loading = false;
      }
  }, 1000);
};

dropdownTindakan = [
  { name: 'Pemeriksaan Kebidanan dan Kandungan'},
  { name: 'Pemeriksaan Bedah'},
  { name: 'Pemeriksaan Internis'},
  { name: 'Pemeriksaan Mata'},
  { name: 'Pemeriksaan THT'},
  { name: 'Pemeriksaan Gigi dan Mulut'},
  { name: 'Pemeriksaan Syaraf'},
  { name: 'Hematologi'},
  { name: 'Kimia Klinik'},
  { name: 'Imunologi'},
  { name: 'Serologi'},
  { name: 'Hormon'},
  { name: 'Narkoba'},
  { name: 'Gram'},
  { name: 'Sputum'},
  { name: 'Sekret'},
  { name: 'Kerokan Kulit'},
  { name: 'Analisa Sperma'},
  { name: 'Mikrobiologi'},
  { name: 'Parasitologi'},
  { name: 'Cairan Tubuh'},
  { name: 'Urine'},
  { name: 'Faeces'},
  { name: 'Pemeriksaan Lain'},
  { name: 'Analisa Batu'},
  { name: 'Lain-lain'},
  { name: 'PCR'},
  { name: 'NGS'},
  { name: 'CR'},
  { name: 'Non CR'},
  { name: 'ECG'},
  { name: 'USG'},
  { name: 'USG Mammae'},
  { name: 'Audiometri'},
  { name: 'Autospirometri'},
  { name: 'Treadmill'},
  { name: 'Pemeriksaan Fisik'},
  { name: 'Anamnesa'},
  { name: 'Kesimpulan'},
  { name: 'Saran'},
  { name: 'Papsmear'},
  { name: 'Pajanan'},
  { name: 'Morfologi Darah Tepi'},
  { name: 'Pemeriksaan Jantung'},
  { name: 'Pemeriksaan Paru'},
  { name: 'Patologi Anatomi'},    
  { name: 'CR ILO'},
  { name: 'Biomolekul_Dev'},
  { name: 'Poliklinik'},
  { name: 'Poli Dokter Umum'},
  { name: 'Poli Penyakit Dalam'},
  { name: 'Poli Gigi dan Mulut'},
  { name: 'Poli Spesialis Jantung'},
  { name: 'Poli Spesialis THT'},
  { name: 'Poli Spesialis Obgyn'},
  { name: 'Poli Spesialis Anak'}
]

submit(tind, pem){
this.selectedTindakan= tind,
this.selectedPemeriksaan = pem
}
}
