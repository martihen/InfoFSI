import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { RegulacionComponent } from './regulacion/regulacion.component';

import { Routes, RouterModule } from '@angular/router';
import { ComercializacionComponent } from './comercializacion/comercializacion.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch: 'full' },
  { path: 'inicio', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'estrategia', component: EstrategiaComponent },
  { path: 'regulacion', component: RegulacionComponent },
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
    ComercializacionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
