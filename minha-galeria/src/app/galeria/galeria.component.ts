import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  fotos: string[] =[
    "Foto 1,",
    "Foto 2,",
    "Foto 3,",
    "Foto 4,",
    "Foto 5,",
    "Foto 6,"
  ]

  constructor() { }

  ngOnInit() {
  }

}
