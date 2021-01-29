import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{
  public labels1: string[] = ['Ventas por descarga', 'Ventas en el local', 'Ventas por email'];
  public data1: string[] = ["100", "200", "300"]
  public titulo: string = "Ventas"
}
