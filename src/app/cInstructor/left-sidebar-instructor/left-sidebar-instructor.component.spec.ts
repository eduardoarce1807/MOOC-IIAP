import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarInstructorComponent } from './left-sidebar-instructor.component';

describe('LeftSidebarInstructorComponent', () => {
  let component: LeftSidebarInstructorComponent;
  let fixture: ComponentFixture<LeftSidebarInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidebarInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
