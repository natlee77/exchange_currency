import { TestBed } from '@angular/core/testing';

import { ExchangeRateService } from './exchangerate.service';

describe('ExchangerateService', () => {
  let service: ExchangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
