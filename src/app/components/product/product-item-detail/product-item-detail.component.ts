import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http-service.service'
import { Product } from 'src/app/models/product-model';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product | undefined;
  products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
  ) { }


  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId')) - 1;
    console.log('fetching data');
    let p!: Product;
    this.httpService.getJSON().subscribe(data => {
      this.products = data
      console.log(this.products[id]);
      this.product = this.products[id];
    });
  }
}
