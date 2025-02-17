import { TestBed } from '@angular/core/testing';

import { PaypalMethodService } from './paypal-method.service';

describe('PaypalMethodService', () => {
  let service: PaypalMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypalMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
