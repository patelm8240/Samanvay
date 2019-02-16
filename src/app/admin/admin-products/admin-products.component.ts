import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productsArray = [];
  constructor(private productService: ProductService) {   }

  ngOnInit() {
    this.productService.getall().subscribe(list => {
      this.productsArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        }
      })
    });
  }

}
