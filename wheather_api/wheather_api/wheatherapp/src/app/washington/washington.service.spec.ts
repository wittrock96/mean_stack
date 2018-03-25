import { TestBed, inject } from '@angular/core/testing';

import { WashingtonService } from './washington.service';

describe('WashingtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WashingtonService]
    });
  });

  it('should be created', inject([WashingtonService], (service: WashingtonService) => {
    expect(service).toBeTruthy();
  }));
});
