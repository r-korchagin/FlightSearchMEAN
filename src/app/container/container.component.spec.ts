/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContainerComponent } from './container.component';
import { SectionComponent } from './section/section.component'
import { SearchComponent } from './section/search/search.component'
import { SearchresultComponent } from './section/searchresult/searchresult.component'
import { AirlinesComponent } from './section/airlines/airlines.component'
import { AirportsComponent } from './section/airports/airports.component'

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponent,
        SectionComponent,
        SearchComponent,
        SearchresultComponent,
        AirlinesComponent,
        AirportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
