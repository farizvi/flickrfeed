import { Component, OnInit } from '@angular/core';
import { FlickrFeedService } from '../_services/flickrFeed.service';
import { ResultItem } from '../_models/resultItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString: string;
  resultItems: ResultItem[] = [];

  constructor(private flickrFeedService: FlickrFeedService) { }

  ngOnInit() {
  }

  searchImages() {
    this.resultItems = this.flickrFeedService.search(this.searchString);    
  }

}
