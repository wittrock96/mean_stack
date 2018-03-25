import { TestBed, inject } from '@angular/core/testing';

import { DallasService } from './dallas.service';

describe('DallasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DallasService]
    });
  });

  it('should be created', inject([DallasService], (service: DallasService) => {
    expect(service).toBeTruthy();
  }));
});
