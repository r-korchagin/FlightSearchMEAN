/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: 'app-navbar'
})
class MockNavbarDirective {
  @Output()  activeSection = new EventEmitter<void>();
}

@Directive({
  selector: 'app-container'
})
class MockContainerDirective {
  @Input() section;
}

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let app : AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockNavbarDirective,
        MockContainerDirective
      ],
    });
    TestBed.compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

  it('should setSection section', async(() => {
    app.setSection(0);
    fixture.detectChanges();
    expect(app.section).toEqual([
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ]);
    app.setSection(1);
    fixture.detectChanges();
    expect(app.section).toEqual([
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ]);
    app.setSection(2);
    fixture.detectChanges();
    expect(app.section).toEqual([
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ]);
  }));

  it('should activeSection section', async(() => {
    app.activeSection({'search':true, 'airlines':false, 'airports':false });
    fixture.detectChanges();
    expect(app.section).toEqual([
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ]);
    app.activeSection({'search':false, 'airlines':true, 'airports':false });
    fixture.detectChanges();
    expect(app.section).toEqual([
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': false, 'up-scroll': true},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ]);
    app.activeSection({'search':false, 'airlines':false, 'airports':true });
    fixture.detectChanges();
    expect(app.section).toEqual([
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': true, 'up-scroll': false},
      {'background': true, 'down-scroll': false, 'up-scroll': true}
    ]);
  }));

});
