import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { HargaService } from 'src/app/service/harga.service';
import { Pemeriksaan } from 'src/app/api/pemeriksaan';
import { Router } from '@angular/router';
import { TabView } from 'primeng/tabview';
import { Product } from '../../api/product';
import { ProductService } from '../../service/productservice';
import { PrimeNGConfig } from 'primeng/api';


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

    index: number = 0;

    panel1 = false;

    panel2= true;

    panel3 = true; 

    periksaDialog: boolean;

    mappingDialog: boolean = false;

    deletePeriksaDialog: boolean = false;

    deletePemeriksaanDialog: boolean = false;

    Pemeriksaan: Pemeriksaan[];

    selectedTindakan: any;

    selectedCabang: any;

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

    sourceProducts: any;

    targetProducts: [];

    constructor(private hargaService: HargaService, private messageService: MessageService,
                private confirmationService: ConfirmationService, private route: Router, private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.hargaService.getPemeriksaan().then(data => this.Pemeriksaan = data);

        // this.isiTerpilih();

        this.cols = [
            {field: 'id', header: 'id'},
            {field: 'pemeriksaan', header: 'pemeriksaan'},
            {field: 'harga', header: 'harga'}
        ];

        this.hargaService.getPemeriksaan().then (products => this.sourceProducts = products);
        this.targetProducts = [];
        this.primengConfig.ripple = true;

        // this.statuses = [
        //     {label: 'INSTOCK', value: 'instock'},
        //     {label: 'LOWSTOCK', value: 'lowstock'},
        //     {label: 'OUTOFSTOCK', value: 'outofstock'}
        // ];
    }

    isiTerpilih(){
        // this.hargaService.getPemeriksaan().then (products => this.sourceProducts = products);
        localStorage.getItem('daftar')
        this.targetProducts = [];
        this.primengConfig.ripple = true;
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
    //   this.selectedTindakan = {};
    //   this.selectedperiksa = null
        localStorage.setItem('daftar',JSON.stringify(this.selectedperiksa));
        this.sourceProducts = this.selectedperiksa
        this.index = 1;
        this.panel2 = false
        this.panel1 = true
        this.panel3 = true
        console.log(this.sourceProducts);
        
        // this.reset()
        
      // this.route.navigate()
      
    }

    nextpage(cabang: any): void{
        // if(!this.targetProducts.includes(cabang)){
        //     this.targetProducts.push()
        // }

        this.panel3 = false;
        this.panel2 = true;
        this.index = 2
    }

    reset (){
        this.selectedTindakan = null;
        this.selectedperiksa = null;
        this.sourceProducts = null;
        // this.targetProducts = null
        this.selectedCabang = null
        this.panel1= false
        this.panel2 = true
        this.panel3 = true
        this.index = 0

        console.log(this.selectedCabang);
        
    }

    submitAll(){
        
    }

    mapping(tarif: any): void{
      this.mappingDialog= true;

      if(!this.selectedperiksa.includes(tarif)){
        this.selectedperiksa.push();
      }
      console.log('daftar tarif: ', this.selectedperiksa)
      
      console.log(this.selectedTindakan);
    }

    submit2(){
        this.selectedCabang
        this.targetProducts
        this.panel1=true;
        this.panel2=true;
        this.panel3=false
        this.index = 2
    }

    dropdownCab = [
         'Kantor Pusat', 
         'Semarang-Indraprasta', 
         'Semarang-Dr.Cipto' ,
         'Semarang-Setiabudi' ,
         'Pekalongan' ,
         'Yogyakarta-Atmosukarto', 
         'Yogyakarta-Bantul' ,
         'Yogyakarta-Wates' ,
         'Tegal' ,
         'Solo' ,
         'Jakarta Utara', 
         'Jakarta Selatan', 
         'Kudus' ,
         'Merauke', 
         'Magelang', 
         'Bogor' ,
         'Poliklinik', 
         'Jayapura' ,
         'Surabaya' ,
         'Surabaya-Sungkono', 
         'Purwokerto' ,
         'Pemalang' ,
         'Demak' ,
         'Purbalingga', 
         'Patologi Anatomi', 
         'Balikpapan' 
    ]

    dropdownTindakan = [
      'Pemeriksaan Kebidanan dan Kandungan',
      'Pemeriksaan Bedah',
      'Pemeriksaan Internis',
      'Pemeriksaan Mata',
      'Pemeriksaan THT',
      'Pemeriksaan Gigi dan Mulut',
      'Pemeriksaan Syaraf',
      'Hematologi',
      'Kimia Klinik',
      'Imunologi',
      'Serologi',
      'Hormon',
      'Narkoba',
      'Gram',
      'Sputum',
      'Sekret',
      'Kerokan Kulit',
      'Analisa Sperma',
      'Mikrobiologi',
      'Parasitologi',
      'Cairan Tubuh',
      'Urine',
      'Faeces',
      'Pemeriksaan Lain',
      'Analisa Batu',
      'Lain-lain',
      'PCR',
      'NGS',
      'CR',
      'Non CR',
      'ECG',
      'USG',
      'USG Mammae',
      'Audiometri',
      'Autospirometri',
      'Treadmill',
      'Pemeriksaan Fisik',
      'Anamnesa',
      'Kesimpulan',
      'Saran',
      'Papsmear',
      'Pajanan',
      'Morfologi Darah Tepi',
      'Pemeriksaan Jantung',
      'Pemeriksaan Paru',
      'Patologi Anatomi',    
      'CR ILO',
      'Biomolekul_Dev',
      'Poliklinik',
      'Poli Dokter Umum',
      'Poli Penyakit Dalam',
      'Poli Gigi dan Mulut',
      'Poli Spesialis Jantung',
      'Poli Spesialis THT',
      'Poli Spesialis Obgyn',
      'Poli Spesialis Anak'
    ];
}
  // submit(tin,pem){
  //   this.selectedTindakan= tin;
  //   this.selectedPemeriksaan= pem
  // }

  // showModalDialog(){
  //   this.displayModal = true;
  // }

