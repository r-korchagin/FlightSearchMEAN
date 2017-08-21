/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultViewComponent } from './result-view.component';

describe('ResultViewComponent', () => {
  let component: ResultViewComponent;
  let fixture: ComponentFixture<ResultViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should view data', () => {
    component.searchresult = [
      {"key":"5948d0cb55e4e17403ee4be5",
        "flightNum":163,
        "distance":1265,
        "durationMin":95,
        "price":145.83,
        "plane":{
          "code":"333",
          "shortName":"Airbus A330-300",
          "fullName":"Airbus Industrie A330-300",
          "manufacturer":"Airbus",
          "model":"A330-300"},
        "finish":{
          "dateTime":"2018-09-05T00:23:00.000Z",
          "airportCode":"JFK",
          "airportName":"John F Kennedy Intl",
          "cityCode":"NYC",
          "cityName":"New York",
          "countryCode":"US",
          "countryName":"United States",
          "latitude":40.639751,
          "longitude":-73.778925,
          "stateCode":"NY",
          "timeZone":"America/New_York"},
        "start":{
          "dateTime":"2018-09-04T22:48:00.000Z",
          "airportCode":"YQY",
          "airportName":"Sydney Airport",
          "cityCode":"YQY",
          "cityName":"Sydney",
          "countryCode":"CA",
          "countryName":"Canada",
          "latitude":46.161388,
          "longitude":-60.047779,
          "stateCode":"NS",
          "timeZone":"America/Halifax"},
        "airline":{
          "code":"QF",
          "name":"Qantas"}
        }];
    component.searchData = { "from":"YQY", "to":"JFK", "date":"2018-09-05" };

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.control-label')).nativeElement.textContent).toContain('Qantas (QF)');
  });

});
