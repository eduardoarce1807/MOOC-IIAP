import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesInstructorComponent } from './courses-instructor.component';

describe('CoursesInstructorComponent', () => {
  let component: CoursesInstructorComponent;
  let fixture: ComponentFixture<CoursesInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
