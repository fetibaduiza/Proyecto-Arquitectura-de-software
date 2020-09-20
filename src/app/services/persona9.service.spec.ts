import { TestBed } from '@angular/core/testing';

import { Persona9Service } from './persona9.service';

describe('Persona9Service', () => {
  let service: Persona9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Persona9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
