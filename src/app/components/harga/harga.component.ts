import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/productservice';
import { Product } from 'src/app/api/product';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-harga',
  templateUrl: './harga.component.html',
  styleUrls: ['./harga.component.scss']
})
export class HargaComponent implements OnInit {

  sourceProducts: Product[];
  targetProducts: Product[];

  constructor(private carService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.carService.getProductsSmall().then (products => this.sourceProducts = products);
    this.targetProducts = [];
    this.primengConfig.ripple = true;
  }
}
