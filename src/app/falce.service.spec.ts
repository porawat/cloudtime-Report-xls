import { TestBed, inject } from '@angular/core/testing';

import { FalceService } from './falce.service';

describe('FalceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FalceService]
    });
  });

  it('should be created', inject([FalceService], (service: FalceService) => {
    expect(service).toBeTruthy();
  }));
});
