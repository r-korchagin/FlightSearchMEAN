import { Component, OnInit, Input } from '@angular/core';
import { SectionComponent } from './section/section.component'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  @Input() section;

  ngOnInit() {
  }

}
