import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowestOptionComponent } from './lowest-option.component';

describe('LowestOptionComponent', () => {
  let component: LowestOptionComponent;
  let fixture: ComponentFixture<LowestOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowestOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowestOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
