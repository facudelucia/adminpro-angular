import { UsuarioService } from './../../services/usuario.service';
import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  
  public usuario:Usuario
  constructor(public sidebarService:SidebarService, private usuarioService:UsuarioService) { 
    this.usuario = usuarioService.usuario
  }

  ngOnInit(): void {
  }

}
