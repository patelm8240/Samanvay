import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    /*return this.db.list('/categories', {
      query: {
        orderByChild: 'name'
      }
    });*/
    this.categoryList = this.db.list('categories');
    return this.categoryList.snapshotChanges();
  }
}
