import { TestBed } from '@angular/core/testing';

import { ComponentTranslateService } from './translate.service';

describe('TranslateService', () => {
  let service: ComponentTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
