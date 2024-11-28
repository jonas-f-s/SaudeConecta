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
import { DadosSocioeconomicosComponent } from './components/dados-socioeconomicos/dados-socioeconomicos.component';

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
    DadosSocioeconomicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
