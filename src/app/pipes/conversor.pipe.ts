import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'conversor'
})

export class PipeConversor implements PipeTransform{
    transform(value, times){//Siempre viene en string
        let valueOne = parseInt(value);
        let valueTwo = parseInt(times);
        let result = "La multiplicación: " + valueOne + " x " + valueTwo +" = " + (valueOne*valueTwo);

        return result;
    }
}
