import { TestBed, inject } from '@angular/core/testing';

import { ChicagoService } from './chicago.service';

describe('ChicagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChicagoService]
    });
  });

  it('should be created', inject([ChicagoService], (service: ChicagoService) => {
    expect(service).toBeTruthy();
  }));
});
