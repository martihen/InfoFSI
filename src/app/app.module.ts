import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Correo
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { RegulacionComponent } from './regulacion/regulacion.component';
import { ComercializacionComponent } from './comercializacion/comercializacion.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { DataIntelligenceComponent } from './data-intelligence/data-intelligence.component';
import { NuestraOpinionComponent } from './nuestra-opinion/nuestra-opinion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BarComponent } from './bar/bar.component';
import { Routes, RouterModule } from '@angular/router';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

//Correo
import { CorreoService } from './services/correo.service';
//sitemap que no a funcionado
import { SitemapComponent } from './sitemap/sitemap.component'
//RECAPTCHA
import { RecaptchaModule } from 'angular-google-recaptcha';

const appRoutes: Routes = [
  { path: 'inicio', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'estrategia', component: EstrategiaComponent },
  { path: 'regulacion', component: RegulacionComponent },
  { path: 'comercializacion', component: ComercializacionComponent },
  { path: 'data_intelligence', component: DataIntelligenceComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'nuestra-opinion', component: NuestraOpinionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: '', redirectTo:'inicio', pathMatch: 'full' },
  { path: '**', redirectTo:'inicio', pathMatch: 'full' }
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
    DataIntelligenceComponent,
    NuestraOpinionComponent,
    BarComponent,
    PiePaginaComponent,
    SitemapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
      //siteKey: '6Lehx68UAAAAAEp9lkgId0SvLiIro2BBRusj6-XS',
      siteKey: '6Lehx68UAAAAAD8FlFp4fXHnJr7uol8Il89IShrL',
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CorreoService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
}

