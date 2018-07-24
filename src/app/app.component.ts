import { Component } from '@angular/core';
import { NombreDelComponenteComponent } from './nombre-del-componente/nombre-del-componente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'La cosa loca';
  cont = 'Mi nombre es pepito perez';
  visible = false;
  decirAdios() {
    this.visible = true;
  }
}
