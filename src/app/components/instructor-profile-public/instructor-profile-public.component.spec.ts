import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorProfilePublicComponent } from './instructor-profile-public.component';

describe('InstructorProfilePublicComponent', () => {
  let component: InstructorProfilePublicComponent;
  let fixture: ComponentFixture<InstructorProfilePublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorProfilePublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorProfilePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
