import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinariesComponent } from './itinaries.component';

describe('ItinariesComponent', () => {
  let component: ItinariesComponent;
  let fixture: ComponentFixture<ItinariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
