import { TestBed } from '@angular/core/testing';

import { CalcserviceService } from './calcservice.service';

describe('CalcserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcserviceService = TestBed.get(CalcserviceService);
    expect(service).toBeTruthy();
  });
});
