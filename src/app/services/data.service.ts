import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
 items: any;
 wishlist: any = [];
 categories: any = [];
 mainList: any = []
  constructor() {
    this.items = [
      {name: "Ball", type:"beach"},
      {name: "Bat", type:"beach"},
      {name: "Bodyboard", type:"beach"},
      {name: "Bucket", type:"beach"},
      {name: "Salami", type:"food"},
      {name: "Prosciutto", type:"food"},
      {name: "Ham", type:"food"},
      {name: "Steak", type:"food"}
    ]
    this.mainList = [
      {name: "Ball", type:"beach"},
      {name: "Bat", type:"beach"},
      {name: "Bodyboard", type:"beach"},
      {name: "Bucket", type:"beach"},
      {name: "Salami", type:"food"},
      {name: "Prosciutto", type:"food"},
      {name: "Ham", type:"food"},
      {name: "Steak", type:"food"}
    ]
    this.categories = ["Beach", "Food"]
  }
}
