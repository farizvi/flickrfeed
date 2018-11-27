import { Component, OnInit, Input } from '@angular/core';
import { ResultItem } from '../_models/resultItem';

@Component({
  selector: 'app-resultitem',
  templateUrl: './resultitem.component.html',
  styleUrls: ['./resultitem.component.css']
})
export class ResultitemComponent implements OnInit {
  @Input() result: ResultItem;

  constructor() { }

  ngOnInit() {
  }

}
