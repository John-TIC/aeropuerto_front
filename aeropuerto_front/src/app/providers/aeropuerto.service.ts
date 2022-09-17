import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";

// Lo hacemos disponible e iyectable para toda la app
@Injectable({
  providedIn: 'root'
})

export class AeropuertoService{

  constructor(private api:ApiService) {
  }

}
