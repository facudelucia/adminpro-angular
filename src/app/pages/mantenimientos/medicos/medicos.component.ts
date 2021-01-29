import  Swal  from 'sweetalert2';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BusquedasService } from './../../../services/busquedas.service';
import { ModalImagenService } from './../../../services/modal-imagen.service';
import { Medico } from './../../../models/medico.model';
import { MedicoService } from './../../../services/medico.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit, OnDestroy {
  
  public cargando:boolean = true
  public medicos:Medico[] = []
  private imgSubs:Subscription
  constructor(private medicoService:MedicoService, private modalImagenService:ModalImagenService, private busquedasService:BusquedasService) { }

  ngOnDestroy(): void {
   this.imgSubs.unsubscribe()
  }

  ngOnInit(): void {
    this.imgSubs = this.imgSubs = this.modalImagenService.nuevaImagen.pipe(delay(100)).subscribe(img=>this.cargarMedicos())
  }
  cargarMedicos(){
    this.cargando = true
    this.medicoService.cargarMedicos()
      .subscribe(medicos=>{
        this.cargando = false
        this.medicos = medicos
      })
  }
  abrirModal(medico:Medico){
    this.modalImagenService.abrirModal('medicos', medico._id, medico.img)
  }
  buscar(termino:string){
    if(termino.length === 0){
      return this.cargarMedicos()
    }
    this.busquedasService.buscar('medicos', termino)
      .subscribe(resp=>{
        this.medicos = resp
      })
  }
  borrarMedico(medico: Medico){
    Swal.fire({
      title: "Borrar Medico?",
      text: `Está a punto de borrar a ${medico.nombre}`,
      icon: "question",
      showCancelButton:true,
      confirmButtonText: "Borrar"
    }).then((res)=>{
      if(res.value){
        this.medicoService.borrarMedico(medico._id)
          .subscribe(()=>{
          this.cargarMedicos()
          Swal.fire("Borrado", `${medico.nombre} fue borrado`, "success")
        })
      }
    })
    
  }
}
