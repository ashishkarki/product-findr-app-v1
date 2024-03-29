import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  searchTextChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearchTextChange(searchText: string) {
    this.searchTextChange.emit(searchText);
  }
}
