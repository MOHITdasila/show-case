import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  productInfo = [];
  ngOnInit(): void {
    this.productService.getProductInfo();
    this.productService.productInfo$.subscribe(products => {
      if (products) {
        console.log(products);
        this.productInfo = products;
      }
    })
  }

  likedProduct(productLiked) {
    console.log(productLiked);
    this.productInfo.find(product => product.title === productLiked.title).likes += 1;
  }

  buyProduct(productBuy) {
    this.productInfo.find(product => product.title === productBuy.title).stock -= 1;
    
  }
}
