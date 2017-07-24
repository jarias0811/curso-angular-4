import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    EmployeeComponent
  ],
  imports: [//Cargar modulos del framework de forma global
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Componente que se cargará de primeras (Principal)
})
export class AppModule { }
