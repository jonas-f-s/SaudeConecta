import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TipoDeCadastroComponent } from './components/tipo-de-cadastro/tipo-de-cadastro.component';
import { CadastroIndividualComponent } from './components/cadastro-individual/cadastro-individual.component';
import { CadastroDomiciliarTerritorialComponent } from './components/cadastro-domiciliar-territorial/cadastro-domiciliar-territorial.component';
import { StatusDeSincronizacaoComponent } from './components/status-de-sincronizacao/status-de-sincronizacao.component';
import { PacientesRecentesComponent } from './components/pacientes-recentes/pacientes-recentes.component';
import { VisitasCadastradasComponent } from './components/visitas-cadastradas/visitas-cadastradas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    TipoDeCadastroComponent,
    CadastroIndividualComponent,
    CadastroDomiciliarTerritorialComponent,
    StatusDeSincronizacaoComponent,
    PacientesRecentesComponent,
    VisitasCadastradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
