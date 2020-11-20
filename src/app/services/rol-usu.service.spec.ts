import { TestBed } from '@angular/core/testing';

import { RolUsuService } from './rol-usu.service';

describe('RolUsuService', () => {
  let service: RolUsuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolUsuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
