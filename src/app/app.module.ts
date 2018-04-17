import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { AppComponent } from './app.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

import { DataService } from './services/data.service';
import { MylistComponent } from './components/mylist/mylist.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
