import { TestBed } from '@angular/core/testing';

import { SalaryServiceService } from './salary-service.service';

describe('SalaryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalaryServiceService = TestBed.get(SalaryServiceService);
    expect(service).toBeTruthy();
  });
});
