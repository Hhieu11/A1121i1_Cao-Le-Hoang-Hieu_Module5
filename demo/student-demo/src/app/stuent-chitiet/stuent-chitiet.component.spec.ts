import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuentChitietComponent } from './stuent-chitiet.component';

describe('StuentChitietComponent', () => {
  let component: StuentChitietComponent;
  let fixture: ComponentFixture<StuentChitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuentChitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuentChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
