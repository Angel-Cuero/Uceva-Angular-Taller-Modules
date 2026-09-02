import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { SECCIONES_SISTEMA_DISENO } from '../../../../core/config/sistemas-diseno.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { CardSeccionComponent } from '../../components/card-seccion/card-seccion.component';
import { SistemasDisenoService } from '../../services/sistemas-diseno.service';
import { ListSistemasComponent } from './list-sistemas.component';

describe('ListSistemasComponent', () => {
  let component: ListSistemasComponent;
  let fixture: ComponentFixture<ListSistemasComponent>;
  let sistemasDisenoService: SistemasDisenoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSistemasComponent, CardSeccionComponent, BadgeComponent, IconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSistemasComponent);
    component = fixture.componentInstance;
    sistemasDisenoService = TestBed.inject(SistemasDisenoService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllSecciones al iniciar', () => {
    const spyGetAllSecciones = jest.spyOn(sistemasDisenoService, 'getAllSecciones').mockReturnValue(of(SECCIONES_SISTEMA_DISENO));
    fixture.detectChanges();
    expect(spyGetAllSecciones).toHaveBeenCalled();
  });

  it('debería asignar las secciones recibidas del servicio', () => {
    jest.spyOn(sistemasDisenoService, 'getAllSecciones').mockReturnValue(of(SECCIONES_SISTEMA_DISENO));
    fixture.detectChanges();
    expect(component.secciones).toEqual(SECCIONES_SISTEMA_DISENO);
  });

  it('debería pasar las secciones al componente card-seccion', () => {
    jest.spyOn(sistemasDisenoService, 'getAllSecciones').mockReturnValue(of(SECCIONES_SISTEMA_DISENO));
    fixture.detectChanges();
    const cardComponents = fixture.debugElement.queryAll(By.directive(CardSeccionComponent));
    expect(cardComponents.length).toBe(SECCIONES_SISTEMA_DISENO.length);
    expect(cardComponents[0].componentInstance.seccion).toEqual(SECCIONES_SISTEMA_DISENO[0]);
  });

  it('debería manejar el error cuando falla getAllSecciones', () => {
    component.secciones = [];
    const errorResponse = new Error('Error al cargar secciones');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(sistemasDisenoService, 'getAllSecciones').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(sistemasDisenoService.getAllSecciones).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.secciones.length).toBe(0);
  });

});
