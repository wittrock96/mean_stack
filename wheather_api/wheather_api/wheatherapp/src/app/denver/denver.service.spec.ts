import { TestBed, inject } from '@angular/core/testing';

import { DenverService } from './denver.service';

describe('DenverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DenverService]
    });
  });

  it('should be created', inject([DenverService], (service: DenverService) => {
    expect(service).toBeTruthy();
  }));
});
