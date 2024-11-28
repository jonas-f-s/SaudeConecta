import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeCadastroComponent } from './tipo-de-cadastro.component';

describe('TipoDeCadastroComponent', () => {
  let component: TipoDeCadastroComponent;
  let fixture: ComponentFixture<TipoDeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
