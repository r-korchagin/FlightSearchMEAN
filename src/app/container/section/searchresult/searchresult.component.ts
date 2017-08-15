import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import * as moment from 'moment';
import { AirportsService } from '../../../airports.service'
import { ResultViewComponent } from './result-view/result-view.component'
import { SearchresultService } from '../../../searchresult.service'

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  public searchDate = new Date();
  public airports = [];
  public fromAirport = "";
  public toAirport = "";
  public searchresult;

  @Input() searchData;
  @Output() findAirlines = new EventEmitter();

  public getDate(): number {
    return this.searchDate && this.searchDate.getTime() || new Date().getTime();
  }

  public getFormatedDate() {
    return moment(this.getDate()).format("YYYY-MM-DD");
  }

  findresult(){
    this.searchData = { "from":this.fromAirport, "to":this.toAirport, "date":this.getFormatedDate() };
    this.findAirlines.emit(this.searchData);
    this.requestAirlinesData();
  }

  constructor(private data: AirportsService, private searchResult: SearchresultService) { }

  requestAirlinesData(){
    this.searchResult.fetchData(this.searchData).subscribe(
      data => {this.searchresult = data},
      err => {console.error("Problem search request", err)}
    );
  }

  ngOnInit() {
    this.data.fetchData().subscribe(
      data => {this.airports = data;},
      err => {
        console.error("Problem request", err)
      }
    );
    this.requestAirlinesData();
  }

}
