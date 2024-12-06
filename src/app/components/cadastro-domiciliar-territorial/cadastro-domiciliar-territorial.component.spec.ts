import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDomiciliarTerritorialComponent } from './cadastro-domiciliar-territorial.component';

describe('CadastroDomiciliarTerritorialComponent', () => {
  let component: CadastroDomiciliarTerritorialComponent;
  let fixture: ComponentFixture<CadastroDomiciliarTerritorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDomiciliarTerritorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDomiciliarTerritorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
