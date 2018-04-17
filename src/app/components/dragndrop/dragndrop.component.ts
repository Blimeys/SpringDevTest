import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

  droppedItems: any = []
  dragEnabled: any = true
  items: any = []

  constructor(public dataService: DataService) {
  }

  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData)
    localStorage.setItem("droppedItems", JSON.stringify(this.droppedItems))
    if (e.dragData.type === 'beach') {
      this.removeItem(e.dragData, this.items)
    } else {
      this.removeItem(e.dragData, this.items)
    }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function(e) {
      return e.name
    }).indexOf(item.name)
    list.splice(index, 1)
    localStorage.setItem("itemList", JSON.stringify(list))
  }

  deleteItem(item) {
    this.items.push(item)
    this.droppedItems = this.droppedItems.filter(x => { return x.name != item.name })
    localStorage.setItem("droppedItems", JSON.stringify(this.droppedItems))
    localStorage.setItem("itemList", JSON.stringify(this.items))
  }


  reset() {
    console.log(localStorage)
    this.items.push.apply(this.items, this.droppedItems)
    localStorage.removeItem("itemList")
    localStorage.removeItem("droppedItems")
    this.droppedItems = []
  }

  retrieveStore() {
    let previousItems = JSON.parse(localStorage.getItem("itemList") || "[]")
    let previousDroppedItems = JSON.parse(localStorage.getItem("droppedItems") || "[]")
    if (localStorage.length === 0) {
      this.items = this.dataService.mainList
    } else {
      this.items = previousItems
      this.droppedItems = previousDroppedItems
    }
  }

  ngOnInit() {
    this.retrieveStore()
  }
}
