import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { PRINCIPIOS } from '../../../../core/config/principios.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { CardPrincipioComponent } from '../../components/card-principio/card-principio.component';
import { PrincipiosService } from '../../services/principios.service';
import { ListPrincipiosComponent } from './list-principios.component';

describe('ListPrincipiosComponent', () => {
  let component: ListPrincipiosComponent;
  let fixture: ComponentFixture<ListPrincipiosComponent>;
  let principiosService: PrincipiosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPrincipiosComponent, CardPrincipioComponent, BadgeComponent, IconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrincipiosComponent);
    component = fixture.componentInstance;
    principiosService = TestBed.inject(PrincipiosService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllPrincipios al iniciar', () => {
    const spyGetAllPrincipios = jest.spyOn(principiosService, 'getAllPrincipios').mockReturnValue(of(PRINCIPIOS));
    fixture.detectChanges();
    expect(spyGetAllPrincipios).toHaveBeenCalled();
  });

  it('debería asignar los principios recibidos del servicio', () => {
    jest.spyOn(principiosService, 'getAllPrincipios').mockReturnValue(of(PRINCIPIOS));
    fixture.detectChanges();
    expect(component.principios).toEqual(PRINCIPIOS);
  });

  it('debería pasar los principios al componente card-principio', () => {
    jest.spyOn(principiosService, 'getAllPrincipios').mockReturnValue(of(PRINCIPIOS));
    fixture.detectChanges();
    const cardComponent = fixture.debugElement
      .query(By.directive(CardPrincipioComponent))
      .componentInstance;
    expect(cardComponent.principio).toEqual(PRINCIPIOS[0]);
  });

  it('debería manejar el error cuando falla getAllPrincipios', () => {
    component.principios = [];
    const errorResponse = new Error('Error al cargar principios');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(principiosService, 'getAllPrincipios').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(principiosService.getAllPrincipios).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.principios.length).toBe(0);
  });

});
