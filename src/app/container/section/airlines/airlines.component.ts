import { Component, OnInit } from '@angular/core';
import { AirlinesService } from '../../../airlines.service'

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  airlines = [];

  constructor(private data: AirlinesService) { }

  ngOnInit() {
    this.data.fetchData().subscribe(
      data => { this.airlines = data; },
      err => {
        console.error('Problem request', err)
      }
    );
  }

}
