import { TestBed } from '@angular/core/testing';

import { ReguladorService } from './regulador.service';

describe('ReguladorService', () => {
  let service: ReguladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReguladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
