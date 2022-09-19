import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";

// Lo hacemos disponible e iyectable para toda la app
@Injectable({
  providedIn: 'root'
})

export class AeropuertoService{
  aviones:any[] = [];

  form_avion = this.fb.group({
    id:[''],
    codigo_avion:['',Validators.required],
    tipo_avion:['',Validators.required],
    ciudad_base:['',Validators.required],
    marca:['',Validators.required],
  })

  ver_formulario_avion: boolean = false;

  items: MenuItem[] = [
    {label: 'Aviones', icon: 'pi pi-fw pi-android', command: (event) =>{
      this.router.navigate(['/inicio'])

      }},
    {label: 'Pilotos', icon: 'pi pi-fw pi-user', command: (event) => {
      this.router.navigate(['/piloto'])
      }},
    {label: 'Home', icon: 'pi pi-fw pi-home', command: (event) => {
      this.router.navigate(['/home'])
      }},
  ];

  constructor(private api:ApiService, private fb:FormBuilder, private router:Router) {
  }

  listar_avion() {
    this.api.get('avion')
      .subscribe(data=>{
        if (data != undefined) {
          this.aviones = data;
        }else {
          alert('No existe información correspondiente a Aviones en BD')
        }
        console.log(data);
      })
  }

  llenar_for_avion(avion: any) {
    //
    this.form_avion.patchValue({
      codigo_avion:avion.codigo_avion,
      tipo_avion:avion.tipo_avion,
      ciudad_base:avion.ciudad_base,
      marca:avion.marca,
    })
  }

  guardar_actualizar_avion() {
    // debemos verificar si el registro ya existe en la tabla avion
    if (this.form_avion.value['id']) {
      this.actualizar_avion()
    }else {
      this.guardar_avion()
    }
  }

  guardar_avion() {
    this.api.add('avion', this.form_avion.value)
      .subscribe(
        data=>{
          if(data != undefined) {}
          // data trae el registro que guardamos agregándole el id asignado por la BD
          console.log(data)
          // Nos aseguramos que el formulario de grabación de datos del avión no sea más visible y lo reseteamos para limpiarlo
          this.ver_formulario_avion = false
          this.form_avion.reset()
          // Se verifica visualmente que el registro haya sido adicionado listando nuevamente la tabla
          this.listar_avion()
        }
      )
  }

  actualizar_avion() {
    this.api.update('avion', this.form_avion.value['id'], this.form_avion.value)
      .subscribe(
        data=>{
          if(data != undefined) {}
          // data trae el registro que guardamos agregándole el id asignado por la BD
          console.log(data)
          // Nos aseguramos que el formulario de grabación de datos del avión no sea más visible y lo reseteamos para limpiarlo
          this.ver_formulario_avion = false
          this.form_avion.reset()
          // Se verifica visualmente que el registro haya sido adicionado listando nuevamente la tabla
          this.listar_avion()
        }
      )
  }

}
