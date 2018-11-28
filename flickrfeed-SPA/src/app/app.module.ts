import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { ResultitemComponent } from './resultitem/resultitem.component';
import { AlertifyService } from './_services/alertify.service';
import { FlickrFeedService } from './_services/flickrFeed.service';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SearchComponent,
      SearchresultsComponent,
      ResultitemComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      AlertifyService,
      FlickrFeedService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
