import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=1e51c112ccef41e78c4b3d420d3f9a49";

  businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=1e51c112ccef41e78c4b3d420d3f9a49';

  techApiUrl = 'https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=1e51c112ccef41e78c4b3d420d3f9a49';

  topHeading(): Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
  techNews(): Observable<any>{
    return this._http.get(this.techApiUrl);
  }
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }

}
