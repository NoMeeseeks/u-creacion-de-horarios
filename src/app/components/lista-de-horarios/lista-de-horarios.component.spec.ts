import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeHorariosComponent } from './lista-de-horarios.component';

describe('ListaDeHorariosComponent', () => {
  let component: ListaDeHorariosComponent;
  let fixture: ComponentFixture<ListaDeHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDeHorariosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListaDeHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

