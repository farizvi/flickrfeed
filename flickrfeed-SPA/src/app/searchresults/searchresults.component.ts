import { Component, OnInit, Input } from '@angular/core';
import { ResultItem } from '../_models/resultItem';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  @Input() searchResults: ResultItem[];

  constructor() { }

  ngOnInit() {
  }
}
