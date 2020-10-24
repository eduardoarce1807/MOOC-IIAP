import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIiapComponent } from './header-iiap.component';

describe('HeaderIiapComponent', () => {
  let component: HeaderIiapComponent;
  let fixture: ComponentFixture<HeaderIiapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIiapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIiapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
