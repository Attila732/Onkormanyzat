import { TestBed } from '@angular/core/testing';

import { OrvosService } from './orvos.service';

describe('OrvosService', () => {
  let service: OrvosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrvosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
