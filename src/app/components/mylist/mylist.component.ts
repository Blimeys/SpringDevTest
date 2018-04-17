import { Component, OnInit, OnChanges  } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit, OnChanges {
  myItems: any;
  categories: any;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.myItems = this.dataService.wishlist
    this.categories = this.dataService.categories;
  }
  ngOnChanges(){
    this.myItems = this.dataService.wishlist
    console.log(this.myItems)
  }
}
