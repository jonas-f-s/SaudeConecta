import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TipoDeCadastroComponent } from './components/tipo-de-cadastro/tipo-de-cadastro.component';
import { CadastroIndividualComponent } from './components/cadastro-individual/cadastro-individual.component';
import { CadastroDomiciliarTerritorialComponent } from './components/cadastro-domiciliar-territorial/cadastro-domiciliar-territorial.component';
import { StatusDeSincronizacaoComponent } from './components/status-de-sincronizacao/status-de-sincronizacao.component';
import { PacientesRecentesComponent } from './components/pacientes-recentes/pacientes-recentes.component';
import { VisitasCadastradasComponent } from './components/visitas-cadastradas/visitas-cadastradas.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tipo-de-cadastro', component: TipoDeCadastroComponent},
  {path: 'cadastro-individual', component: CadastroIndividualComponent},
  {path: 'cadastro-domiciliar-territorial', component: CadastroDomiciliarTerritorialComponent},
  {path: 'status-de-sincronizacao', component: StatusDeSincronizacaoComponent},
  {path: 'pacientes-recentes', component: PacientesRecentesComponent},
  {path: 'visitas-cadastradas', component: VisitasCadastradasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
