import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArquitectura } from './card-arquitectura';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
