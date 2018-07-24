import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre-del-componente',
  templateUrl: './nombre-del-componente.component.html',
  styleUrls: ['./nombre-del-componente.component.css']
})
export class NombreDelComponenteComponent implements OnInit {

  dato = 'Este es el primer componente creado :V';
  constructor() { }

  ngOnInit() {
    console.log('Componente inicializado...');
  }

}
