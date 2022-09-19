import { Component } from '@angular/core';
import {AeropuertoService} from "./providers/aeropuerto.service";
import {ApiService} from "./providers/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public aeropuerto:AeropuertoService, public api:ApiService) {
  }

}

