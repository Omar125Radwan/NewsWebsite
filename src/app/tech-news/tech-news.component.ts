import { NewsapiservicesService } from './../services/newsapiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.scss']
})
export class TechNewsComponent implements OnInit {

  technewsDisplay: any = [];

  constructor(private _services: NewsapiservicesService) { }

  ngOnInit(): void {
    this._services.techNews().subscribe(result => {
      this.technewsDisplay = result.articles;
    })
  }

}
