import { TestBed } from '@angular/core/testing';

import { PassToBlockService } from './pass-to-block.service';

describe('PassToBlockService', () => {
  let service: PassToBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassToBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
