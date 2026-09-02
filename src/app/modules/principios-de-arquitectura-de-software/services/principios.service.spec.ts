import { TestBed } from '@angular/core/testing';
import { PRINCIPIOS } from '../../../core/config/principios.config';
import { PrincipiosService } from './principios.service';

describe('PrincipiosService', () => {
  let service: PrincipiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipiosService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllPrincipios debería retornar un observable con los principios', (done) => {
    service.getAllPrincipios().subscribe((principios) => {
      expect(principios).toEqual(PRINCIPIOS);
      done();
    });
  });
});
