import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-pemeriksaan',
  templateUrl: './pemeriksaan.component.html',
  styleUrls: ['./pemeriksaan.component.scss']
})
export class PemeriksaanComponent implements OnInit {
  displayModal: boolean;
  displayBasic: boolean;

  cabang: any;
  tindakan: any;

  cabang1: any;
  selectedCabang = {
    name : null,
    code : null
  }

  tindakan1: any;
  selectedTindakan = {
    name: null,
    code: null
  }

  pemeriksaan1: any;
  pemeriksaan : any

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
  }

  showModalDialog(){
    this.displayModal= true
  }

  dropdownCab = [
    { name: "Pusat", code: "Cabang 1"},
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
    { name: 'Balikpapan', code: 'Cabang 26'},
    { name: 'Labkesmas', code: 'Cabang 27'},
    { name: 'Tanjung Duren', code: 'Cabang 28'},
    { name: 'Ambarawa', code: 'Cabang 29'},
    { name: 'Divisi Online', code: 'Cabang 30'},
    { name: 'Lab Klinik Riset Banda Aceh', code: 'Cabang 31'}
  ];

  dropdownTindakan = [
    { name: 'Pemeriksaan Kebidanan dan Kandungan', code: 'tindakan1'},
    { name: 'Pemeriksaan Bedah', code : 'tindakan2'},
    { name: 'Pemeriksaan Internis', code: 'tindakan3'},
    { name: 'Pemeriksaan Mata', code: 'tindakan4'},
    { name: 'Pemeriksaan THT', code: 'tindakan5'},
    { name: 'Pemeriksaan Gigi dan Mulut', code: 'tindakan6'},
    { name: 'Pemeriksaan Syaraf', code: 'tindakan7'},
    { name: 'Hematologi', code: 'tindakan8'},
    { name: 'Kimia Klinik', code: 'tindakan9'},
    { name: 'Imunologi', code: 'tindakan10'},
    { name: 'Serologi', code: 'tindakan11'},
    { name: 'Hormon', code: 'tindakan12'},
    { name: 'Narkoba', code: 'tindakan13'},
    { name: 'Gram', code: 'tindakan14'},
    { name: 'Sputum', code: 'tindakan15'},
    { name: 'Sekret', code: 'tindakan16'},
    { name: 'Kerokan Kulit', code: 'tindakan17'},
    { name: 'Analisa Sperma', code: 'tindakan18'},
    { name: 'Mikrobiologi', code: 'tindakan19'},
    { name: 'Parasitologi', code: 'tindakan20'},
    { name: 'Cairan Tubuh', code: 'tindakan21'},
    { name: 'Urine', code: 'tindakan22'},
    { name: 'Faeces', code: 'tindakan23'},
    { name: 'Pemeriksaan Lain', code: 'tindakan24'},
    { name: 'Analisa Batu', code: 'tindakan25'},
    { name: 'Lain-lain', code: 'tindakan26'},
    { name: 'PCR', code: 'tindakan27'},
    { name: 'NGS', code: 'tindakan28'},
    { name: 'CR', code: 'tindakan29'},
    { name: 'Non CR', code: 'tindakan30'},
    { name: 'ECG', code: 'tindakan31'},
    { name: 'USG', code: 'tindakan32'},
    { name: 'USG Mammae', code: 'tindakan33'},
    { name: 'Audiometri', code: 'tindakan34'},
    { name: 'Autospirometri', code: 'tindakan35'},
    { name: 'Treadmill', code: 'tindakan36'},
    { name: 'Pemeriksaan Fisik', code: 'tindakan37'},
    { name: 'Anamnesa', code: 'tindakan38'},
    { name: 'Kesimpulan', code: 'tindakan39'},
    { name: 'Saran', code: 'tindakan40'},
    { name: 'Papsmear', code: 'tindakan41'},
    { name: 'Pajanan', code: 'tindakan42'},
    { name: 'Morfologi Darah Tepi', code: 'tindakan43'},
    { name: 'Pemeriksaan Jantung', code: 'tindakan44'},
    { name: 'Pemeriksaan Paru', code: 'tindakan45'},
    { name: 'Patologi Anatomi', code:'tindakan46'},
    { name: 'CR ILO', code: 'tindakan47'},
    { name: 'Biomolekul_Dev', code: 'tindakan48'},
    { name: 'Poliklinik', code: 'tindakan49'},
    { name: 'Poli Dokter Umum', code: 'tindakan50'},
    { name: 'Poli Penyakit Dalam', code: 'tindakan51'},
    { name: 'Poli Gigi dan Mulut', code: 'tindakan52'},
    { name: 'Poli Spesialis Jantung', code: 'tindakan53'},
    { name: 'Poli Spesialis THT', code: 'tindakan54'},
    { name: 'Poli Spesialis Obgyn', code: 'tindakan55'},
    { name: 'Poli Spesialis Anak', code: 'tindakan56'}
  ]
  
  submit(cb,td,pm){
    this.cabang1 = cb,
    this.tindakan1 = td,
    this.pemeriksaan1 = pm
  }

  cek(){
    this.showModalDialog()
  }
}
