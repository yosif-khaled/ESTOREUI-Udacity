import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { HttpService } from 'src/app/services/http/http-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = this.httpService.getProducts();

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    console.log(this.products);
  }

}

// private _jsonURL = 'assets/data.json';

// products: any = [];

// constructor(private httpClient: HttpClient){}
// ngOnInit(){
//   this.httpClient.get<Observable<Product[]>>(this._jsonURL).subscribe(data =>{
//     this.products = data;
//   })
// }  
