import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TipoDeCadastroComponent } from './components/tipo-de-cadastro/tipo-de-cadastro.component';
import { CadastroIndividualComponent } from './components/cadastro-individual/cadastro-individual.component';
import { DadosSocioeconomicosComponent } from './components/dados-socioeconomicos/dados-socioeconomicos.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tipo-de-cadastro', component: TipoDeCadastroComponent},
  {path: 'cadastro-individual', component: CadastroIndividualComponent},
  {path: 'dados-socioeconomicos', component: DadosSocioeconomicosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
