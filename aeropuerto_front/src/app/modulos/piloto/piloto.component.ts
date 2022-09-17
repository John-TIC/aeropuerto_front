import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../providers/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.scss']
})
export class PilotoComponent implements OnInit {

  pilotos:any[] = [];

  form_piloto = this.fb.group({
    codigo_piloto:['',Validators.required],
    nombre_piloto:['',Validators.required],
    horas_vuelo_piloto:['',Validators.required],
  })

  ver_formulario_piloto: boolean = false;

  constructor(private api:ApiService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    //this.api.crear_header_token(data.token)
    this.router.navigate(['/piloto'])
    this.listar_piloto()
  }

  listar_piloto() {
    this.api.get('piloto')
      .subscribe(data=>{
        if (data != undefined) {
          this.pilotos = data
        }else {
          alert('No existe información correspondiente a Pilotos en BD')
        }
        console.log(data);
      })
  }

  guardar_piloto() {
    this.api.add('piloto', this.form_piloto.value)
      .subscribe(
        data=>{
          if(data != undefined) {}
          // data trae el registro que guardamos agregándole el id asignado por la BD
          console.log(data)
          // Nos aseguramos que el formulario de grabación de datos del piloto no sea más visible y lo reseteamos para limpiarlo
          this.ver_formulario_piloto = false
          this.form_piloto.reset()
          // Se verifica visualmente que el registro haya sido adicionado listando nuevamente la tabla
          this.listar_piloto()
        }
      )
  }

}
