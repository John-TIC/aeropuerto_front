import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./providers/api.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { PilotoComponent } from './modulos/piloto/piloto.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {AeropuertoService} from "./providers/aeropuerto.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PilotoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      /* Lo importamos para que nuestros formularios sean manejados como objetos y junto con el módulo anterior */
      /* hacen mucho más facil el manejo de los formularios. */
        ReactiveFormsModule,
      /* Hace posible el uso de HttpClient en el Servicio "api.service.ts" */
      /* hacen mucho más facil el manejo de los formularios. */
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        DialogModule,
        DropdownModule,
        OverlayPanelModule,
        TabMenuModule,

    ],
  providers: [ApiService, AeropuertoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
