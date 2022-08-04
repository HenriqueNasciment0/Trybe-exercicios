import MyInterface from "./MyInterface";

class MyClass implements MyInterface {

    constructor(public myNumber: number) {}

    myFunc(myParam: number): string {
        return `O resultado da soma de ${myParam} +
        ${this.myNumber} é igual a ${myParam + this.myNumber}`
    }

}

const obj1 = new MyClass(2);

console.log(obj1.myNumber)
console.log(obj1.myFunc(4));


