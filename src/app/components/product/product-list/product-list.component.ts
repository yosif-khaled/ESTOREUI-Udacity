import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { HttpService } from 'src/app/services/http/http-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  products: Product[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.products = this.httpService.getProducts();
  }

}