import { Component } from '@angular/core';
import { DjangoapiService } from '../servicios/djangoapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myUsuarios: any;

  constructor(private api: DjangoapiService) {
    this.api.getUsuarios().subscribe(
      (usuarios)=>{
        console.log(usuarios);
        this.myUsuarios = usuarios
      }
      ,
      (error)=>{
        console.log(error);
      }
    )
  }

  loadUsuarios(){
    this.api.getUsuarios().subscribe(
      (usuarios)=>{
        console.log(usuarios);
      }
      ,
      (error)=>{
        console.log(error);
      }
    )
  }
}
