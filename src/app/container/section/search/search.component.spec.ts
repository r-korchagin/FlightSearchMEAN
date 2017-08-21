/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchComponent } from './search.component';
import { Observable } from 'rxjs/Rx';
import { AirportsService } from '../../../airports.service'
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';

class MockAirportService extends AirportsService {
  constructor() { super(null) }

  fetchData() {
    return Observable.of([
      {
        'airportCode': 'JFK',
        'airportName': 'John F Kennedy Intl',
        'cityCode': 'NYC',
        'cityName': 'New York',
        'countryCode': 'US',
        'countryName': 'United States',
        'latitude': 40.639751,
        'longitude': -73.778925,
        'stateCode': 'NY',
        'timeZone': 'America/New_York'
      }
    ]);
  }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, DatepickerModule.forRoot()],
      declarations: [SearchComponent],
      providers: [
        { provide: AirportsService, useClass: MockAirportService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return date if has setting date', () => {
    component.searchDate = new Date(2018, 8, 5);
    expect(component.getDate()).toEqual((new Date(2018, 8, 5)).getTime());
  });

  it('should return date if date was undefined ', () => {
    component.searchDate = undefined;
    expect(component.getDate()).toBeTruthy();
  });

  it('should return formated date if has setting date', () => {
    component.searchDate = new Date(2018, 8, 5);
    expect(component.getFormatedDate()).toEqual('2018-09-05');
  });

  it('should return date if date was undefined ', () => {
    component.searchDate = undefined;
    expect(component.getFormatedDate()).toBeTruthy();
    expect(component.getFormatedDate()).not.toEqual('');
  });

});
