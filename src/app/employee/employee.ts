export class Employee{
    // public name:string;
    // public age:number;
    //
    // constructor(name,age){
    //     this.name = name;
    //     this.age = age;
    // }
    // equivalente a =>
    constructor(
        public name:string,
        public age:number,
        public position:string,
        public hired:boolean
    ){}
}
