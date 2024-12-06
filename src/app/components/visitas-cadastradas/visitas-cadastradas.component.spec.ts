import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasCadastradasComponent } from './visitas-cadastradas.component';

describe('VisitasCadastradasComponent', () => {
  let component: VisitasCadastradasComponent;
  let fixture: ComponentFixture<VisitasCadastradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasCadastradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitasCadastradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
