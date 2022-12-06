import { TestBed } from '@angular/core/testing';

import { VedorDataService } from './vedor-data.service';

describe('VedorDataService', () => {
  let service: VedorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VedorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
