/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Directive, EventEmitter, Input, Output } from '@angular/core';

import { SectionComponent } from './section.component';
//import { SearchComponent } from './search/search.component'
//import { AirlinesComponent } from './airlines/airlines.component'
//import { AirportsComponent } from './airports/airports.component'
//import { SearchresultComponent } from './searchresult/searchresult.component'

//import { FormsModule } from '@angular/forms';
//import { DatepickerModule } from 'ngx-bootstrap';

@Directive({
  selector: 'app-search'
})
class MockSearchDirective {
  @Output('findAirlines')
  public findAirlines = new EventEmitter<void>();
}

@Directive({
  selector: 'app-airlines'
})
class MockAirlinesDirective {
}

@Directive({
  selector: 'app-airports'
})
class MockAirportsDirective {
}

@Directive({
  selector: 'app-searchresult'
})
class MockSearchresultDirective {
  @Input('searchData')
  @Output('findAirlines')
  public findAirlines = new EventEmitter<void>();
}

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ SectionComponent,
        MockSearchDirective,
        MockSearchresultDirective,
        MockAirlinesDirective,
        MockAirportsDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.section = [
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show section 0', () => {
    component.section = [
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ];
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('section.background.up-scroll')).length).toEqual(3);
  });

  it('should show section 1', () => {
    component.section = [
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ];
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('section.background.down-scroll')).length).toEqual(1);
    expect(fixture.debugElement.queryAll(By.css('section.background.up-scroll')).length).toEqual(2);
  });

  it('should show section 3', () => {
    component.section = [
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ];
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('section.background.down-scroll')).length).toEqual(2);
    expect(fixture.debugElement.queryAll(By.css('section.background.up-scroll')).length).toEqual(1);
  });

});
