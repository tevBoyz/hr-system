import { TestBed } from '@angular/core/testing';

import { CandidateServiceService } from './candidate-service.service';

describe('CandidateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateServiceService = TestBed.get(CandidateServiceService);
    expect(service).toBeTruthy();
  });
});
