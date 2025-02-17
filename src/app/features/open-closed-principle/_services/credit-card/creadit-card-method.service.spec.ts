import { TestBed } from '@angular/core/testing';

import { CreaditCardMethodService } from './creadit-card-method.service';

describe('CreaditCardMethodService', () => {
  let service: CreaditCardMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaditCardMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
