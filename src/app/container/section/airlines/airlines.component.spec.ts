/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { AirlinesComponent } from './airlines.component';
import { AirlinesService } from '../../../airlines.service'

class MockAirlinesService extends AirlinesService {
  constructor(){ super(null) }

  fetchData(){
    return Observable.of( [{"code":"SU","name":"Aeroflot"},
      {"code":"MU","name":"China Eastern"},
      {"code":"EK","name":"Emirates"},
      {"code":"KE","name":"Korean Air lines"},
      {"code":"QF","name":"Qantas"},
      {"code":"SQ","name":"Singapore Airlines"}] )
  }
}

describe('AirlinesComponent', () => {
  let component: AirlinesComponent;
  let airportService: MockAirlinesService;
  let fixture: ComponentFixture<AirlinesComponent>;

  let de, hd:      DebugElement;
  let el, elhd:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [ AirlinesComponent ],
      providers:[ {provide: AirlinesService, useClass: MockAirlinesService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // query for the title <td> by CSS element selector
    de = fixture.debugElement.query(By.css('td'));
    hd = fixture.debugElement.query(By.css('th'));
    el = de.nativeElement;
    elhd = hd.nativeElement;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('contain airlineCode data', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('SU');
  });

  it('contain airlineCode header', () => {
    fixture.detectChanges();
    expect(elhd.textContent).toContain('Airline Code');
  });

});
