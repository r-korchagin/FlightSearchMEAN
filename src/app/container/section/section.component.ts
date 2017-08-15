import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from './search/search.component'
import { AirlinesComponent } from './airlines/airlines.component'
import { AirportsComponent } from './airports/airports.component'
import { SearchresultComponent } from './searchresult/searchresult.component'


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() section

  public resultView = false;
  public searchData = {};

  findAirlines(e){
    this.searchData = e;
    this.resultView = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
