import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingbarChildComponent } from './ratingbar-child.component';

describe('RatingbarChildComponent', () => {
  let component: RatingbarChildComponent;
  let fixture: ComponentFixture<RatingbarChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingbarChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingbarChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
