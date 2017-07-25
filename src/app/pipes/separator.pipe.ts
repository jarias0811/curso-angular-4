import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'separator'
})

export class PipeSeparator implements PipeTransform {
  transform(input) {//Siempre viene en string
    input = input.toString();
    let num = input.replace(/\,/g, '');
    if (!isNaN(num)) {
      num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
      num = num.split('').reverse().join('').replace(/^[\,]/, '');
      input = num;
    }
    else {
      alert('Solo se permiten numeros');
      input = input.replace(/[^\d\,]*/g, '');
    }
    return input;
  }
}
