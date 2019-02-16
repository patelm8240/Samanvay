import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }
  create(product){
    return this.db.list('/products').push(product);
  }

  getall(){
    this.productList = this.db.list('/products');
    return this.productList.snapshotChanges();

  }
}
