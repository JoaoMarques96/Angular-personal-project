import { TestBed } from '@angular/core/testing';

import { UpdateEmployeeGuardGuard } from './update-employee-guard.guard';

describe('UpdateEmployeeGuardGuard', () => {
  let guard: UpdateEmployeeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateEmployeeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
