import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Two way data binding
import { routing, appRoutingProvider} from './app.routing'; //Rutas
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CarComponent } from './cars/car.component';
import { TemplatesComponent } from './templates/templates.component';

import {PipeConversor} from './pipes/conversor.pipe';
import {PipeSeparator} from './pipes/separator.pipe';

@NgModule({
  declarations: [//Directivas pipes y componentes
    AppComponent,
    EmployeeComponent,
    FruitComponent,
    HomeComponent,
    ContactComponent,
    CarComponent,
    TemplatesComponent,
    PipeConversor,
    PipeSeparator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
