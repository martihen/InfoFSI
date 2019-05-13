import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { RegulacionComponent } from './regulacion/regulacion.component';
import { ComercializacionComponent } from './comercializacion/comercializacion.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { DataIntelligenceComponent } from './data-intelligence/data-intelligence.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch: 'full' },
  { path: 'inicio', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'estrategia', component: EstrategiaComponent },
  { path: 'regulacion', component: RegulacionComponent },
  { path: 'comercializacion', component: ComercializacionComponent },
  { path: 'data_intelligence', component: DataIntelligenceComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    NavbarComponent,
    ServiciosComponent,
    ContactoComponent,
    EstrategiaComponent,
    RegulacionComponent,
    ComercializacionComponent,
    EstudiosComponent,
    DataIntelligenceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
