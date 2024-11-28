import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSocioeconomicosComponent } from './dados-socioeconomicos.component';

describe('DadosSocioeconomicosComponent', () => {
  let component: DadosSocioeconomicosComponent;
  let fixture: ComponentFixture<DadosSocioeconomicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosSocioeconomicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosSocioeconomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
