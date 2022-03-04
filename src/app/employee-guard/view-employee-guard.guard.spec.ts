import { TestBed } from '@angular/core/testing';

import { ViewEmployeeGuardGuard } from './view-employee-guard.guard';

describe('ViewEmployeeGuardGuard', () => {
  let guard: ViewEmployeeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewEmployeeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
