import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-hakakses',
  templateUrl: './hakakses.component.html',
  styleUrls: ['./hakakses.component.scss'],
  providers : [MessageService]
})
export class HakaksesComponent implements OnInit {

  displayModal : boolean;
  showModalDialog() {
    this.displayModal = true;
  }
  
  namapeg: any;
  nama_pegawai: any;
  nip: any;
  nomor_induk: any;
  ktp: any;
  nomor_ktp: any;
  hp: any;
  no_hp: any;
  koor: any;
  email_koor: any;
  kacab: any;
  email_kacab: any;
  divisi: any;
  div = 
  {
    name : null,
    code : null
  };

  cab: any;
  cabang = 
  {
    name: null,
    code : null
  }



  selectedDivisi =
  {
    name : null,
    code : null
  };
  selectedCabang = 
  {
    name : null,
    code : null
  }


  object={
    nama:"daspin",
    abses:"09"
  }
  constructor(private messageService : MessageService, private primeConfig : PrimeNGConfig) { }

  ngOnInit(): void {
    console.log(this.object);
    
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Data Anda Kami Ambil YAHAHA'});
}
  dropdownDiv = [

      { name: 'Marketing', code: 'Option 1' },
      { name: 'Pelayanan', code: 'Option 2' },
      { name: 'KACAB', code: 'Option 3' },
      { name: 'Teknis', code: 'Option 4'},
      { name: 'Perawat', code: 'Option 5'},
      { name: 'Dokter', code: 'Option 6'},
      { name: 'Penunjang', code: 'Option 7'},
      { name: 'MCU', code: 'Option 8'},
      { name: 'Rujukan', code: 'Option 9'},
      { name: 'Keuangan', code: 'Option 10'},
      { name: 'SDM', code: 'Option 11'},
      { name: 'IT', code: 'Option 12'}
  ];

  dropdownCab = [
    { name: 'Kantor Pusat', code: 'Cabang 1'},
    { name: 'Semarang-Indraprasta', code: 'Cabang 2'},
    { name: 'Semarang-Dr.Cipto', code: 'Cabang 3'},
    { name: 'Semarang-Setiabudi', code: 'Cabang 4'},
    { name: 'Pekalongan', code: 'Cabang 5'},
    { name: 'Yogyakarta-Atmosukarto', code: 'Cabang 6'},
    { name: 'Yogyakarta-Bantul', code: 'Cabang 7'},
    { name: 'Yogyakarta-Wates', code: 'Cabang 8'},
    { name: 'Tegal', code: 'Cabang 9'},
    { name: 'Solo', code: 'Cabang 10'},
    { name: 'Jakarta Utara', code: 'Cabang 11'},
    { name: 'Jakarta Selatan', code: 'Cabang 12'},
    { name: 'Kudus', code: 'Cabang 13'},
    { name: 'Merauke', code: 'Cabang 14'},
    { name: 'Magelang', code: 'Cabang 15'},
    { name: 'Bogor', code: 'Cabang 16'},
    { name: 'Poliklinik', code: 'Cabang 17'},
    { name: 'Jayapura', code: 'Cabang 18'},
    { name: 'Surabaya', code: 'Cabang 19'},
    { name: 'Surabaya-Sungkono', code: 'Cabang 20'},
    { name: 'Purwokerto', code: 'Cabang 21'},
    { name: 'Pemalang', code: 'Cabang 22'},
    { name: 'Demak', code: 'Cabang 23'},
    { name: 'Purbalingga', code: 'Cabang 24'},
    { name: 'Patologi Anatomi', code: 'Cabang 25'},
    { name: 'Balikpapan', code: 'Cabang 26'}
];
  submit(nampe,np,kt,noha,emko,emka,dv,cb)
  {
    this.nama_pegawai=nampe,
    this.nomor_induk=np,
    this.nomor_ktp=kt,
    this.no_hp=noha,
    this.email_koor=emko,
    this.email_kacab=emka,
    this.div=dv,
    this.cabang=cb
  }
}
