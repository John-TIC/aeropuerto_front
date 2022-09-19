import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /* Cuando se cree el formulario los nombres de campo "username" y "password" deben ser exactamente como están */
  /* definidos en la BD */

  form_usuario = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    }
  )

  /* Se inyecta el servicio "ApiService" sobre el constructor lo que lo tipifica como "Provider" y debe ser */
  /* registrado así en nuestro módulo "app.modules.ts" */
  constructor(private api:ApiService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  login () {
    this.api.login(this.form_usuario.value)
      .subscribe(
        data=>{
          if (data != undefined) {
            alert('El usuario ha ingresado correctamente al sistema')
            // Se guarda el usuario que ingresó al sistema en la variable usuario
            this.api.usuario = data
            this.api.crear_header_token(data.token)
            this.router.navigate(['/inicio'])
          }else {
            this.router.navigate(['/login'])
          }
          console.log(data)
        }
      )
  }

}
