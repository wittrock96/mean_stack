import { TestBed, inject } from '@angular/core/testing';

import { SeattleService } from './seattle.service';

describe('SeattleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeattleService]
    });
  });

  it('should be created', inject([SeattleService], (service: SeattleService) => {
    expect(service).toBeTruthy();
  }));
});
