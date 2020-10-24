import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIiapComponent } from './footer-iiap.component';

describe('FooterIiapComponent', () => {
  let component: FooterIiapComponent;
  let fixture: ComponentFixture<FooterIiapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterIiapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIiapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
