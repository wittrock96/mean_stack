import { TestBed, inject } from '@angular/core/testing';

import { SanJoseService } from './san-jose.service';

describe('SanJoseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanJoseService]
    });
  });

  it('should be created', inject([SanJoseService], (service: SanJoseService) => {
    expect(service).toBeTruthy();
  }));
});
