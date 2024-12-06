import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesRecentesComponent } from './pacientes-recentes.component';

describe('PacientesRecentesComponent', () => {
  let component: PacientesRecentesComponent;
  let fixture: ComponentFixture<PacientesRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesRecentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
