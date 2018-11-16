import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRoomsComponent } from './state-rooms.component';

describe('StateRoomsComponent', () => {
  let component: StateRoomsComponent;
  let fixture: ComponentFixture<StateRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
