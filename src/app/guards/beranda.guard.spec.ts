import { TestBed } from '@angular/core/testing';

import { BerandaGuard } from './beranda.guard';

describe('BerandaGuard', () => {
  let guard: BerandaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BerandaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
