import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { EmployeeComponent } from './employee/employee.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CarComponent } from './cars/car.component';
import { TemplatesComponent } from './templates/templates.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'fruit', component: FruitComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:page', component: ContactComponent },
  { path: 'car', component: CarComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: '**', component: HomeComponent } //Cuando no exista la ruta por defecto enviara a la '**'
];

export const appRoutingProvider: any[] = []; //Necesario para proveer las rutas

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes); //Se le especifica que rutas cargar
