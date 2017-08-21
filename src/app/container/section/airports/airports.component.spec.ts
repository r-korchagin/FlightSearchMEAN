/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AirportsComponent } from './airports.component';
import { AirportsService } from '../../../airports.service'

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

describe('AirportsComponent', () => {
  let component: AirportsComponent;
  let fixture: ComponentFixture<AirportsComponent>;

  let de, hd: DebugElement;
  let el, elhd: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AirportsComponent],
      providers: [{ provide: AirportsService, useClass: MockAirportService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // query for the title <td> by CSS element selector
    de = fixture.debugElement.query(By.css('td'));
    hd = fixture.debugElement.query(By.css('th'));
    el = de.nativeElement;
    elhd = hd.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contain airportCode data', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('JFK');
  });

  it('contain airportCode header', () => {
    fixture.detectChanges();
    expect(elhd.textContent).toContain('Airport Code');
  });

});
