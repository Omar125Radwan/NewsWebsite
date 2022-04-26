import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './services/newsapiservices.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechNewsComponent,
    BusinessnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
