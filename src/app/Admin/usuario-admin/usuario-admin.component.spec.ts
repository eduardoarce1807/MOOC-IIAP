import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAdminComponent } from './usuario-admin.component';

describe('UsuarioAdminComponent', () => {
  let component: UsuarioAdminComponent;
  let fixture: ComponentFixture<UsuarioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
