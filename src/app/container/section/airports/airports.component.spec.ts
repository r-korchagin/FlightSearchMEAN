/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirportsComponent } from './airports.component';
import {AirportsService} from '../../../airports.service'
import {AppModule} from '../../../app.module'

describe('AirportsComponent', () => {
  let component: AirportsComponent;
  let fixture: ComponentFixture<AirportsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppModule],
      declarations: [ AirportsComponent ],
      providers:[ AirportsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
