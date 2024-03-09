import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaDeHorariosComponent } from './components/lista-de-horarios/lista-de-horarios.component';
import { CreacionMateriasComponent } from './components/creacion-materias/creacion-materias.component';
import { CreacionProfesoresComponent } from './components/creacion-profesores/creacion-profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeHorariosComponent,
    CreacionMateriasComponent,
    CreacionProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
