import { TestBed } from '@angular/core/testing';

import { BusinessFunctionsService } from './business-functions.service';

describe('FunctionsService', () => {
  let service: BusinessFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
