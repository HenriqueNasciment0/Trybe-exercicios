"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `O resultado da soma de ${myParam} +
        ${this.myNumber} é igual a ${myParam + this.myNumber}`;
    }
}
const obj1 = new MyClass(2);
console.log(obj1.myNumber);
console.log(obj1.myFunc(4));
