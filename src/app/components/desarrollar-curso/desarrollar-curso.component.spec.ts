import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrollarCursoComponent } from './desarrollar-curso.component';

describe('DesarrollarCursoComponent', () => {
  let component: DesarrollarCursoComponent;
  let fixture: ComponentFixture<DesarrollarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrollarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrollarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
