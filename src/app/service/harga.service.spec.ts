import { TestBed } from '@angular/core/testing';

import { HargaService } from './harga.service';

describe('HargaService', () => {
  let service: HargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
