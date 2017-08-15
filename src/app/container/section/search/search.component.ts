import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { AirportsService } from '../../../airports.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  header = "Test Header";
  public searchDate = new Date();
  public airports = [];
  public fromAirport = "";
  public toAirport = "";

  @Output() findAirlines = new EventEmitter();

  public getDate(): number {
    return this.searchDate && this.searchDate.getTime() || new Date().getTime();
  }

  public getFormatedDate() {
    return moment(this.getDate()).format("YYYY-MM-DD");
  }

  findResult(){
      this.findAirlines.emit({ "from":this.fromAirport, "to":this.toAirport, "date":this.getFormatedDate() });
  }

  constructor(private data: AirportsService) { }

  ngOnInit() {
    this.data.fetchData().subscribe(
      data => {this.airports = data;},
      err => {
        console.error("Problem request", err)
      }
    );
  }

}
