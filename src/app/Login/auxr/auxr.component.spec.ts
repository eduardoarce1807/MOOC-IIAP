import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxrComponent } from './auxr.component';

describe('AuxrComponent', () => {
  let component: AuxrComponent;
  let fixture: ComponentFixture<AuxrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
