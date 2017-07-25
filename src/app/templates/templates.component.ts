import {Component} from '@angular/core';

@Component({
    selector:'templates',
    templateUrl:'templates.component.html'
})

export class TemplatesComponent{
    public title;
    public administrator;

    constructor(){
        this.title = "Plantillas ngTemplate en Angular";
        this.administrator = true;
    }

    changeAdmin(value){
        this.administrator = value;
    }
}
