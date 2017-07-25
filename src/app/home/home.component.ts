import {Component} from '@angular/core';
import {ClothesService} from '../services/clothes.service';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    providers:[ClothesService]
})

export class HomeComponent{
    public title = "Pagína Principal";
    public clothesList:Array<string>;
    public clothesToSave:string;
    public date;
    public money = -1;
    constructor(
        private _clothesService:ClothesService
    ){
        this.date = new Date();
    }

    ngOnInit(){
        this.clothesList = this._clothesService.getClothesCollection();
        console.log(this.clothesList);
    }

    saveClothes(){
        this._clothesService.addClothes(this.clothesToSave);
        this.clothesToSave = null;
    }

    deleteClothes(index:number){
        this._clothesService.deleteClothes(index);
    }
}
