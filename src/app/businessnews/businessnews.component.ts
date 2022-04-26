import { NewsapiservicesService } from './../services/newsapiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BusinessnewsComponent implements OnInit {
  businessnewsDisplay: any = []

  constructor(private _services: NewsapiservicesService) { }

  ngOnInit(): void {
    this._services.businessNews().subscribe(result => {
      this.businessnewsDisplay = result.articles;
    });
  }

}
