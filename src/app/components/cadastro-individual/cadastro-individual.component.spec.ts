import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIndividualComponent } from './cadastro-individual.component';

describe('CadastroIndividualComponent', () => {
  let component: CadastroIndividualComponent;
  let fixture: ComponentFixture<CadastroIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
