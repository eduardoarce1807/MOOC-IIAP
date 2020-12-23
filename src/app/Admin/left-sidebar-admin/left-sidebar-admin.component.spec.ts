import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarAdminComponent } from './left-sidebar-admin.component';

describe('LeftSidebarAdminComponent', () => {
  let component: LeftSidebarAdminComponent;
  let fixture: ComponentFixture<LeftSidebarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidebarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
