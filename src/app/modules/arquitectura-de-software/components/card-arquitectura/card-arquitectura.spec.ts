import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArquitectura } from './card-arquitectura';
import { ArquitecturaInfo } from '../../interfaces/arquitectura.interface';

describe('CardArquitectura', () => {
  let component: CardArquitectura;
  let fixture: ComponentFixture<CardArquitectura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardArquitectura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardArquitectura);
    component = fixture.componentInstance;
    component.info = {
      title: 'Definición y Propósito Fundamental',
      icon: 'fas fa-sitemap',
      content: 'Contenido de prueba para la tarjeta.'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
