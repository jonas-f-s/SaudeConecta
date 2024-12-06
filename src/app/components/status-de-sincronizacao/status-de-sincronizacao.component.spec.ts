import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDeSincronizacaoComponent } from './status-de-sincronizacao.component';

describe('StatusDeSincronizacaoComponent', () => {
  let component: StatusDeSincronizacaoComponent;
  let fixture: ComponentFixture<StatusDeSincronizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusDeSincronizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusDeSincronizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
