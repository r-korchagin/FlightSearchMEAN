/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchresultComponent } from './searchresult.component';
import { AirportsService } from '../../../airports.service'
import { ResultViewComponent } from './result-view/result-view.component'
import { SearchresultService } from '../../../searchresult.service'
import { Observable } from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

class MockSearchresultService extends SearchresultService {
  constructor() { super(null); }

  fetchData() {
    return Observable.of([
      {
        'key': '5948d0cb55e4e17403ee4be5',
        'flightNum': 163,
        'distance': 1265,
        'durationMin': 95,
        'price': 145.83,
        'plane': {
          'code': '333',
          'shortName': 'Airbus A330-300',
          'fullName': 'Airbus Industrie A330-300',
          'manufacturer': 'Airbus',
          'model': 'A330-300'
        },
        'finish': {
          'dateTime': '2018-09-05T00:23:00.000Z',
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
        },
        'start': {
          'dateTime': '2018-09-04T22:48:00.000Z',
          'airportCode': 'YQY',
          'airportName': 'Sydney Airport',
          'cityCode': 'YQY',
          'cityName': 'Sydney',
          'countryCode': 'CA',
          'countryName': 'Canada',
          'latitude': 46.161388,
          'longitude': -60.047779,
          'stateCode': 'NS',
          'timeZone': 'America/Halifax'
        },
        'airline': {
          'code': 'QF',
          'name': 'Qantas'
        }
      }]);
  }
}

describe('SearchresultComponent', () => {
  let component: SearchresultComponent;
  let fixture: ComponentFixture<SearchresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, DatepickerModule.forRoot()],
      declarations: [SearchresultComponent, ResultViewComponent],
      providers: [
        { provide: AirportsService, useClass: MockAirportService },
        { provide: SearchresultService, useClass: MockSearchresultService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultComponent);
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

  it('should Output findAirlines emit ', () => {
    let searchData;
    // fill search form
    // let from = fixture.debugElement.query(By.css('select[name=select-from-airport]'));
    // let to = fixture.debugElement.query(By.css('select[name=select-to-airport]'));
    // let date = fixture.debugElement.query(By.css('input[name=flightDate]'));
    const submitEl = fixture.debugElement.query(By.css('.search-button'));

    component.searchDate = new Date(2018, 8, 5);
    component.fromAirport = 'JFK';
    component.toAirport = 'JFK';

    component.findAirlines.subscribe((value) => searchData = value);

    fixture.detectChanges();

    submitEl.triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      expect(searchData).toBeTruthy();
      expect(searchData.from).toEqual('JFK');
      expect(searchData.to).toEqual('JFK');
      expect(searchData.date).toEqual('2018-09-05');
    });
  });

});
