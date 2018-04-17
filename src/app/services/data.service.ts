import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
 items: any;
 wishlist: any = [];
 categories: any = [];
  constructor() {
    this.items = {
      beach: ["Ball", "Bat", "Bodyboard", "Bucket"],
      food: ["Salami", "Prosciutto", "Ham", "Steak"]
    }
    this.categories = ["Beach", "Food"]
  }
  add(item){
    this.wishlist.push(item)
    console.log(this.wishlist);
  }
}
