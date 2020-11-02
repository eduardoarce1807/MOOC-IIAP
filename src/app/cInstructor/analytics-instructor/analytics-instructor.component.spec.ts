import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsInstructorComponent } from './analytics-instructor.component';

describe('AnalyticsInstructorComponent', () => {
  let component: AnalyticsInstructorComponent;
  let fixture: ComponentFixture<AnalyticsInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
