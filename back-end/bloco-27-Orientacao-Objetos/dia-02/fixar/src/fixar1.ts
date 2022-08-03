class Superclass {
    public isSuper: boolean;

    constructor() {
        this.isSuper = true;
    }

    sayHello(): void {
        console.log('Olá mundo!');
    }
}

class Subclass extends Superclass {

    constructor() {
        super();
        this.isSuper = false;
    }
}

function myFunc(newValue: Subclass) {
console.log(newValue.isSuper? "Super!" : "Sub!");
}

const objSuper = new Superclass();
const objSub = new Subclass();

myFunc(objSuper);
myFunc(objSub);
