import {Component} from '@angular/core';

/*selector -> etiqueta donde se cargara el componente
**template -> html del componente
*/
@Component({
  selector: 'fruit',
  templateUrl: './fruit.component.html'
})

/*Clase del componente, tiene encapsulamiento de datos, pero al pasarlo a javascript no lo tiene en cuenta*/
export class FruitComponent {
  public component_name = 'Componente de fruta';
  public fruit_list = 'Naranja,Manzana,Pera y Sandia';
  public name: string;
  public age: number;
  public isAdult: boolean;
  public jobs:Array<any> = ['Developer']; //El tipo any deja meter todos los tipos de variable en un arreglo
  public comodin;

  constructor(){
      this.name = "John Arias";
      this.age = 23;
      this.isAdult = false;
      this.comodin = "SI";
  }

  /*Se lanza primero el constructor y luego el ngOnInit*/
  ngOnInit(){
      this.changeName();
      this.changeAge(45);
      console.log(this.name + ' ' + this.age);

      //Variables y alcance
      let one = 8;
      let two = 15;
      if(one === 8){
          console.log("DENTRO DEL IF");
      }
  }

  changeName(){
      this.name = "Angie Cruz";
  }

  changeAge(age){
      this.age = age;
  }
}
