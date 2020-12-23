import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAdminComponent } from './curso-admin.component';

describe('CursoAdminComponent', () => {
  let component: CursoAdminComponent;
  let fixture: ComponentFixture<CursoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
