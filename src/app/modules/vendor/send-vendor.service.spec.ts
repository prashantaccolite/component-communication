import { TestBed } from '@angular/core/testing';

import { SendVendorService } from './send-vendor.service';

describe('SendVendorService', () => {
  let service: SendVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
