import { Component, OnInit } from '@angular/core';
import { DjangoapiService } from '../servicios/djangoapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  segment: string = 'login';
  username: string = '';
  password: string = '';
  myUsuarios: any[] = [];
  nuevoUsuario: any = {
    correo: '',
    password: ''
  }

  constructor(private api: DjangoapiService,private router: Router) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.api.getUsuarios().subscribe(
      (usuarios) => {
        console.log(usuarios);
        this.myUsuarios = usuarios;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  crearNuevoUsuario() {
    this.api.crearUsuario(this.nuevoUsuario).subscribe(
      (response) => {
        console.log('Usuario creado:', response);
        // Luego de crear el usuario, puedes actualizar la lista de usuarios llamando a obtenerUsuarios()
        this.obtenerUsuarios();
      },
      (error) => {
        console.error('Error al crear usuario:', error);
      }
    );
  }

  loginUser(){
    const navigationExtras = {
      state:{
        username: this.username,
      },
    };
    this.router.navigate(['/login'], navigationExtras);
  }


}