import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  @Input() searchData;
  @Input() searchresult;

  constructor() { }

  ngOnInit() {

  }

}
