import { TestBed } from '@angular/core/testing';

import { ScopeManagerService } from './scope-manager.service';

describe('ScopeManagerService', () => {
  let service: ScopeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScopeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
