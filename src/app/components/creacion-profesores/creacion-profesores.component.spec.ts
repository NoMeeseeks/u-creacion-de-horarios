import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionProfesoresComponent } from './creacion-profesores.component';

describe('CreacionProfesoresComponent', () => {
  let component: CreacionProfesoresComponent;
  let fixture: ComponentFixture<CreacionProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionProfesoresComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreacionProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

