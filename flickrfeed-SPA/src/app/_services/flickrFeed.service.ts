import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultItem } from '../_models/resultItem';
import { Result } from '../_models/result';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class FlickrFeedService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  search(tags: string): ResultItem[] {
    const resultItems: ResultItem[] = [];

    this.http.get(this.baseUrl + '?tags=' + tags, httpOptions).subscribe((result: Result) => {
      result.items.forEach((item: any) => {
        resultItems.push({
          title: item.title,
          url: item.link
        });
      });
    });

    return resultItems;
  }

}
