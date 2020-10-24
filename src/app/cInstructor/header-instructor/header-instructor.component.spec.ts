import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInstructorComponent } from './header-instructor.component';

describe('HeaderInstructorComponent', () => {
  let component: HeaderInstructorComponent;
  let fixture: ComponentFixture<HeaderInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
