import {Injectable} from '@angular/core';

@Injectable()
export class ClothesService{
    public clothesName = "Pantalones";
    public clothesCollection = ["Camiseta","Camisa"];

    test(clothesName){
        return clothesName;
    }

    addClothes(clothesName:string):Array<string>{
        this.clothesCollection.push(clothesName);
        return this.getClothesCollection();
    }

    deleteClothes(index:number){
        this.clothesCollection.splice(index,1);
        return this.getClothesCollection();
    }
    getClothesCollection(){
        return this.clothesCollection;
    }
}
