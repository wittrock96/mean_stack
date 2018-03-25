import { TestBed, inject } from '@angular/core/testing';

import { BurbankService } from './burbank.service';

describe('BurbankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurbankService]
    });
  });

  it('should be created', inject([BurbankService], (service: BurbankService) => {
    expect(service).toBeTruthy();
  }));
});
