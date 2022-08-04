"use strict";
class ConsoleLogger {
    log(param) {
        console.log('log1: ', param);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log('log2: ', param);
    }
}
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`Salva chave ${key} e seu valor ${value}`);
    }
}
const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();
const exp1 = new ExampleDatabase(log1);
const exp2 = new ExampleDatabase(log2);
const exp3 = new ExampleDatabase();
exp1.save('chave 1', 'valor 1');
exp2.save('chave 2', 'valor 2');
exp3.save('chave3', 'valor 3');
