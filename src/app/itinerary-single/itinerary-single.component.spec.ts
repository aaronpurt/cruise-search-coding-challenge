import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarySingleComponent } from './itinerary-single.component';

describe('ItinerarySingleComponent', () => {
  let component: ItinerarySingleComponent;
  let fixture: ComponentFixture<ItinerarySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerarySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
