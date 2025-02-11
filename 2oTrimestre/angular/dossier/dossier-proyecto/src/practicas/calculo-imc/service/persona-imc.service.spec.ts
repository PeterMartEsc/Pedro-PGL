import { TestBed } from '@angular/core/testing';

import { PersonaImcService } from './persona-imc.service';

describe('PersonaImcService', () => {
  let service: PersonaImcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaImcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
