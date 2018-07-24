import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NombreDelComponenteComponent } from './nombre-del-componente/nombre-del-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NombreDelComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
