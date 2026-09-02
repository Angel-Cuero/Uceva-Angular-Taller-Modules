import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SECCIONES_SISTEMA_DISENO } from '../../../core/config/sistemas-diseno.config';
import { SistemasDisenoService } from './sistemas-diseno.service';

describe('SistemasDisenoService', () => {
  let service: SistemasDisenoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemasDisenoService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllSecciones debería retornar un observable con las secciones', (done) => {
    service.getAllSecciones().subscribe((secciones) => {
      expect(secciones).toEqual(SECCIONES_SISTEMA_DISENO);
      done();
    });
  });
});
