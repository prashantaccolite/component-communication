import { TestBed } from '@angular/core/testing';

import { VendorInputService } from './vendor-input.service';

describe('VendorInputService', () => {
  let service: VendorInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
