import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ContentComponent} from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
  
    
   
    
  ],
  imports: [
    BrowserModule,
    ContentComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
