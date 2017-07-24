import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Two way data binding
import { routing, appRoutingProvider} from './app.routing'; //Rutas

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FruitComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
