import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  aviones:any[] = []

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get('avion')
      .subscribe(data=>{
        if (data != undefined) {
          this.aviones = data
        }else {
          alert('No existe información correspondiente a Aviones en BD')
        }
        console.log(data);
    })
  }

}
