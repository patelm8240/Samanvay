import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categoriesArray = [];
  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router) {
  }
  
  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
    
  }
  
  
  ngOnInit() {
    this.categoryService.getCategories().subscribe(list => {
      this.categoriesArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        }
      })
    });
  }

}
