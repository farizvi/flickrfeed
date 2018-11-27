import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FlickrFeedService } from '../_services/flickrFeed.service';
import { ResultItem } from '../_models/resultItem';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchString: string;
  resultItems: ResultItem[] = [];

  constructor(
    private fb: FormBuilder,
    private alertify: AlertifyService,
    private flickrFeedService: FlickrFeedService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.fb.group({
      searchText: ['', Validators.required]
    });
  }

  searchImages() {
    if (this.searchForm.valid) {
      this.resultItems = this.flickrFeedService.search(this.searchString); 
    } else {
      this.alertify.error('Please enter tags to search');
    }
  }

}
