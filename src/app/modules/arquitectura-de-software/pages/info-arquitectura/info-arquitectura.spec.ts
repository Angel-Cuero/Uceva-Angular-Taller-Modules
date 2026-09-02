import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArquitectura } from './info-arquitectura';

describe('InfoArquitectura', () => {
  let component: InfoArquitectura;
  let fixture: ComponentFixture<InfoArquitectura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoArquitectura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoArquitectura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
