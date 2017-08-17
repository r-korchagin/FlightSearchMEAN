/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set searchForm', () => {
    component.searchForm();
    expect(component.searchFormClass.active).toBeTruthy();
    expect(component.airlinesFormClass.active).not.toBeTruthy();
    expect(component.airortsFormClass.active).not.toBeTruthy();
  });

  it('should set airlinesForm', () => {
    component.airlinesForm();
    expect(component.searchFormClass.active).not.toBeTruthy();
    expect(component.airlinesFormClass.active).toBeTruthy();
    expect(component.airortsFormClass.active).not.toBeTruthy();
  });

  it('should set airportsForm', () => {
    component.airportsForm();
    expect(component.searchFormClass.active).not.toBeTruthy();
    expect(component.airlinesFormClass.active).not.toBeTruthy();
    expect(component.airortsFormClass.active).toBeTruthy();
  });


});
