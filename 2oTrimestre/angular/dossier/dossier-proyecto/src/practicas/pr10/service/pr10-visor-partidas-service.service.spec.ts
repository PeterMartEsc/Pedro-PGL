import { TestBed } from '@angular/core/testing';

import { Pr10VisorPartidasServiceService } from './pr10-visor-partidas-service.service';

describe('Pr10VisorPartidasServiceService', () => {
  let service: Pr10VisorPartidasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pr10VisorPartidasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
