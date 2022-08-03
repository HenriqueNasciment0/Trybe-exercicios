"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class Subclass extends Superclass {
    constructor() {
        super();
        this.isSuper = false;
    }
}
function myFunc(newValue) {
    console.log(newValue.isSuper ? "Super!" : "Sub!");
}
const objSuper = new Superclass();
const objSub = new Subclass();
myFunc(objSuper);
myFunc(objSub);
