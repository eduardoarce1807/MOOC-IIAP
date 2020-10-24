import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInstructorComponent } from './footer-instructor.component';

describe('FooterInstructorComponent', () => {
  let component: FooterInstructorComponent;
  let fixture: ComponentFixture<FooterInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
