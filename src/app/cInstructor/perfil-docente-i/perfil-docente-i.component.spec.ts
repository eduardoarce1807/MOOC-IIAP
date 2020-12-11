import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDocenteIComponent } from './perfil-docente-i.component';

describe('PerfilDocenteIComponent', () => {
  let component: PerfilDocenteIComponent;
  let fixture: ComponentFixture<PerfilDocenteIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDocenteIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDocenteIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
