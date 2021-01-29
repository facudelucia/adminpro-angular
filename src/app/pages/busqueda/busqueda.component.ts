import { Hospital } from './../../models/hospital.model';
import { Usuario } from './../../models/usuario.model';
import { BusquedasService } from './../../services/busquedas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  
  public usuarios: Usuario[] = []
  public medicos: Medico[] = []
  public hospitales: Hospital[] = []

  constructor(private activatedRoute:ActivatedRoute, private busquedasService: BusquedasService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({termino})=>{
        this.busquedasService.busquedaGlobal(termino)
          .subscribe((resp:any)=>{
            this.usuarios = resp.usuarios;
            this.medicos = resp.medicos;
            this.hospitales = resp.hospitales;
          })
      })
  }

}
