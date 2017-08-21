import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../../../airports.service'

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

  airports = [];

  constructor(private data: AirportsService) { }

  ngOnInit() {
    this.data.fetchData().subscribe(
      data => {
        if (data instanceof Array) {
          this.airports = data;
        } else {
          this.airports = [];
        }
      },
      err => {
        console.error('Problem request', err)
      }
    );
  }

}
