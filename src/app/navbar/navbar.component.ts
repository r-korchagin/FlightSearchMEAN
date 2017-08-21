import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchFormClass = { 'active': true };
  airlinesFormClass = { 'active': false };
  airortsFormClass = { 'active': false };

  @Output() activeSection = new EventEmitter();

  searchForm() {
    this.searchFormClass['active'] = true;
    this.airlinesFormClass['active'] = false;
    this.airortsFormClass['active'] = false;
    this.activeSection.emit({ 'search': true, 'airlines': false, 'airports': false });
  }

  airlinesForm() {
    this.searchFormClass['active'] = false;
    this.airlinesFormClass['active'] = true;
    this.airortsFormClass['active'] = false;
    this.activeSection.emit({ 'search': false, 'airlines': true, 'airports': false });
  }

  airportsForm() {
    this.searchFormClass['active'] = false;
    this.airlinesFormClass['active'] = false;
    this.airortsFormClass['active'] = true;
    this.activeSection.emit({ 'search': false, 'airlines': false, 'airports': true });
  }

  constructor() { }

  ngOnInit() {
  }

}
