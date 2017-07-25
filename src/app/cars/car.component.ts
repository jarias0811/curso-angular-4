import {Component} from '@angular/core';
import { Car } from './car';
import {RequestsService} from '../services/requests.service';

@Component({
    selector:'cars',
    templateUrl:'car.component.html',
    providers:[RequestsService]
})

export class CarComponent{
    public car:Car;
    public cars:Array<Car>;
    public posts;

    constructor(
        private _requestsService:RequestsService
    ){
        this.car = new Car("","","");
        this.cars = [
            new Car("Mazda","120","Blanco"),
            new Car("Renault","110","Azul")
        ];
    }

    ngOnInit(){
        //Subscribe es para poder capturar la respuesta del servicio del observable
        this._requestsService.getPosts().subscribe(result => {
            console.log("request",result);
            this.posts = result;
            if (!this.posts) {
                console.log("Error en el servidor");
            }
        },error => {
            let errorMessage = <any>error;
            console.log(errorMessage);
        });
    }

    onSubmit(){
        console.log(this.car);
        this.cars.push(this.car);
        this.car = new Car("","","");
    }

}
