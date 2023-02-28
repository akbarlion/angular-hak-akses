import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { HargaService } from 'src/app/service/harga.service';
import { Pemeriksaan } from 'src/app/api/pemeriksaan';
import { Router } from '@angular/router';
import { TabView } from 'primeng/tabview';
import { Product } from '../../api/product';
import { ProductService } from '../../service/productservice';


@Component({
  selector: 'app-fluffy',
  templateUrl: './fluffy.component.html',
  styleUrls: ['../../../assets/demo/badges.scss'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`]
})
export class FluffyComponent implements OnInit {
    periksaDialog: boolean;

    mappingDialog: boolean = false;

    deletePeriksaDialog: boolean = false;

    deletePemeriksaanDialog: boolean = false;

    Pemeriksaan: Pemeriksaan[];

    selectedTindakan: any;

    periksa = {
      id: null,
      pemeriksaan: null,
      harga: null
    };

    selectedperiksa: any[] = [];

    submitted: boolean;

    cols: any[];

    statuses: any[];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private hargaService: HargaService, private messageService: MessageService,
                private confirmationService: ConfirmationService, private route: Router) {}

    ngOnInit() {
        this.hargaService.getPemeriksaan().then(data => this.Pemeriksaan = data);

        this.cols = [
            {field: 'id', header: 'id'},
            {field: 'pemeriksaan', header: 'pemeriksaan'},
            {field: 'harga', header: 'harga'}
        ];

        // this.statuses = [
        //     {label: 'INSTOCK', value: 'instock'},
        //     {label: 'LOWSTOCK', value: 'lowstock'},
        //     {label: 'OUTOFSTOCK', value: 'outofstock'}
        // ];
    }

    openNew() {
        // this.periksa.id = this.createId() ;
        this.submitted = false;
        this.periksaDialog = true;
    }

    deleteSelectedProducts() {
        this.deletePemeriksaanDialog = true;
    }

    editProduct(periksa: Pemeriksaan) {
        // this.periksa = {...periksa};
        this.periksaDialog = true;
    }

    deleteProduct(periksa: Pemeriksaan) {
        this.deletePeriksaDialog = true;
        // this.periksa = {...periksa};
    }

    confirmDeleteSelected(){
        this.deletePemeriksaanDialog = false;
        this.Pemeriksaan = this.Pemeriksaan.filter(val => !this.selectedperiksa.includes(val));
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        this.selectedperiksa = null;
    }

    confirmDelete(){
        this.deletePeriksaDialog = false;
        this.Pemeriksaan = this.Pemeriksaan.filter(val => val.id !== this.periksa.id);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        // this.periksa = {};
    }

    hideDialog() {
        this.periksaDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.periksa.pemeriksaan.trim()) {
            if (this.periksa.id) {
                // @ts-ignore
                 this.periksa.pemeriksaan = this.periksa.pemeriksaan.value ? this.periksa.pemeriksaan.value: this.periksa.pemeriksaan;
                this.Pemeriksaan[this.findIndexById(this.periksa.id)] = this.periksa;
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            } else {
                this.periksa.id = this.createId();
                this.Pemeriksaan.push(this.periksa);
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            }

            this.Pemeriksaan = [...this.Pemeriksaan];
            this.periksaDialog = false;
            // this.periksa = {};
            console.log(this.periksa)
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
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onSubmit(tind,per){
      this.selectedTindakan = tind,
      this.selectedperiksa = per,
      this.mappingDialog= false

      // this.route.navigate()

      console.log(this.selectedperiksa);
      
    }

    mapping(tarif: any): void{
      this.mappingDialog= true;

      if(!this.selectedperiksa.includes(tarif)){
        this.selectedperiksa.push();
      }
      console.log('daftar tarif: ', this.selectedperiksa)
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
}
  // submit(tin,pem){
  //   this.selectedTindakan= tin;
  //   this.selectedPemeriksaan= pem
  // }

  // showModalDialog(){
  //   this.displayModal = true;
  // }

