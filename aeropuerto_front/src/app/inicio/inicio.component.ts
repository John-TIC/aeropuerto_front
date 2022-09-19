import { Component, OnInit } from '@angular/core';

import {ApiService} from "../providers/api.service";
import {FormBuilder,  Validators} from "@angular/forms";
import {AeropuertoService} from "../providers/aeropuerto.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {
  constructor(public aeropuerto:AeropuertoService) { }

  ngOnInit(): void {
    this.aeropuerto.listar_avion()
  }

}
