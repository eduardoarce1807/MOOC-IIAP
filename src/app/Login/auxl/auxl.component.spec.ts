import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxlComponent } from './auxl.component';

describe('AuxlComponent', () => {
  let component: AuxlComponent;
  let fixture: ComponentFixture<AuxlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
