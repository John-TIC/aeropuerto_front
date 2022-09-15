/* Servicio inyectable (va a estar presenta en c/u de los componentes en los que se inyecte */

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usuario:any;
  base_url = 'http://127.0.0.1:8000'  /* url de la API */
  /* Se utiliza para obtener el token */
  header_login = new HttpHeaders().set('Content-Type', 'application/json')
  options_login = {headers:this.header_login};
  /* Las sgts variables nos permitiran corroborar que los header y option llevan un token dentro y se utilizaran para */
  /* todo el resto de operaciones sobre las url's */
  header_token:any
  options_token:any

  constructor(private http:HttpClient) { }

  /* Método que va a recibir el usuario y contraseña */
  login(data:any) {
    let url = `${this.base_url+'/token'}`;
    let credenciales = JSON.stringify(data)
    return this.http.post(url, credenciales, this.options_login).pipe(catchError(this.handleError<any>()))
  }

  get(endpoint:string):Observable<any[] > {
    let url = `${this.base_url+'/'+ endpoint +'/'}`;
    return this.http.get(url, this.options_token).pipe(catchError(this.handleError<any>()))
  }

  /* Método que adiciona token a un header */
  crear_header_token(token:string){
    this.header_token = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token '+token)
    this.options_token = {headers:this.header_token};

  }

  /* Toma el error lo convierte en cadena y lo presenta por pantalla. */
  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.error)
      return of(result as T);
    };
  }
}
