import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  private storageName: string = "Wishlist";

   constructor() { }

   setWishlistr(data: any) {
     localStorage.setItem(this.storageName, JSON.stringify(data));
   }

   getUserSettings() {
     let data = localStorage.getItem(this.storageName);
     return JSON.parse(data);
   }

   clearUserSettings() {
     localStorage.removeItem(this.storageName);
   }

   cleanAll() {
     localStorage.clear()
   }
}
