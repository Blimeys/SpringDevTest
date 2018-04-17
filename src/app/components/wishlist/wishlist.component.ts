import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  val = 500;
isDropAllowed = (dragData: any) => {
  return dragData > this.val;
}
  items: any;
  myList: any = [];
  categories: any;
  options: any = {
    removeOnSpill: true
  }
  constructor(public dataService: DataService, private dragulaService: DragulaService) { }

  ngOnInit() {
    this.myList = this.dataService.wishlist;
    this.items = this.dataService.items
    this.categories = this.dataService.categories;
  }

  addToWishList(item){
    !this.myList.includes(item) && this.dataService.add(item);
  }
  deleteItem(item){
    this.myList.indexOf(item, 0) > -1 && this.myList.splice(this.myList.indexOf(item, 0))
  }
  emptyWishList(){
    this.myList = []
  }
}
