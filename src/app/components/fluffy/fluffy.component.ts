import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { HargaService } from 'src/app/service/harga.service';
import { Pemeriksaan } from 'src/app/api/pemeriksaan';
import { TabView } from 'primeng/tabview';


@Component({
  selector: 'app-fluffy',
  templateUrl: './fluffy.component.html',
  styleUrls: ['./fluffy.component.scss'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`]
})
export class FluffyComponent implements OnInit {
  hargaDialog : boolean;

  Pemeriksaan: Pemeriksaan[];

  pemeriksaan: Pemeriksaan;

  selectedPemeriksaan: Pemeriksaan[];

  submitted: boolean;

  selectedTindakan= {
    name: null,
    code: null
  };

  tind= {
    name: null,
    code: null
  }

  Tindakan: any;

  displayModal : boolean;

  constructor(
    private hargaService: HargaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.hargaService.getPemeriksaan().then(data => this.Pemeriksaan = data);
  }

  openNew(){
    this.pemeriksaan = {};
    this.submitted = false;
    this.hargaDialog = true;
  }

  deleteSelectedPemeriksaan(){
    this.confirmationService.confirm({
      message: 'Apakah Anda yakin ingin menghapus harga ini?',
      header: 'Konfirmasi Penghapusan',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.Pemeriksaan = this.Pemeriksaan.filter(val => !this.selectedPemeriksaan.includes(val));
        this.selectedPemeriksaan = null;
        this.messageService.add({severity: 'success', summary: 'Sukses', detail: 'Sukses menghapus', life: 3000});
      }
    });
  }

  editPemeriksaan(pemeriksaan: Pemeriksaan){
    this.pemeriksaan = {...pemeriksaan};
    this.hargaDialog = true;
  }

  deletePemeriksaan(pemeriksaan: Pemeriksaan){
    this.confirmationService.confirm({
      message: 'Apakah Anda yakin ingin menghapus ini?' + pemeriksaan.pemeriksaan + '?',
      header: 'Konfirmasi',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.Pemeriksaan = this.Pemeriksaan.filter(val=> val.id !== pemeriksaan.id);
        this.pemeriksaan = {};
        this.messageService.add({severity: 'success', summary: 'Sukses!', detail: 'Sukses menghapus pemeriksaan', life: 3000});
      }
    });
  }

  hideDialog(){
    this.hargaDialog = false;
    this.submitted = false;
  }

  savePemeriksaan() {
    this.submitted = true;

        if (this.pemeriksaan.pemeriksaan.trim()) {
            if (this.pemeriksaan.id) {
                this.Pemeriksaan[this.findIndexById(this.pemeriksaan.id)] = this.pemeriksaan;                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            } else {
                this.pemeriksaan.id = this.createId();
                // this.pemeriksaan.image = 'pemeriksaan-placeholder.svg';
                this.Pemeriksaan.push(this.pemeriksaan);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            };
            

            this.Pemeriksaan = [...this.Pemeriksaan];
            this.hargaDialog = false;
            this.pemeriksaan = {};
        }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.Pemeriksaan.length; i++) {
        if (this.Pemeriksaan[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

createId(): string {
  let id = '';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

 

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
  ];

  submit(tin,pem){
    this.selectedTindakan= tin;
    this.selectedPemeriksaan= pem
  }

  showModalDialog(){
    this.displayModal = true;
  }
}
