import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { NgDragDropModule } from 'ng-drag-drop';

import { DataService } from './services/data.service';


import { DragndropComponent } from './components/dragndrop/dragndrop.component';

@NgModule({
  declarations: [
    AppComponent,
    DragndropComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
