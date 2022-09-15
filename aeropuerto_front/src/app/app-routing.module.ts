import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {InicioComponent} from "./inicio/inicio.component";

/* archivo de rutas con un arreglo de rutas
   path contiene la ruta a la que voy a apuntarle y component indica el componente que va a manejarlo */
const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
