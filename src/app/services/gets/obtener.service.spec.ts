import { TestBed } from '@angular/core/testing';

import { ObtenerService } from './obtener.service';

describe('ObtenerService', () => {
  let service: ObtenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
