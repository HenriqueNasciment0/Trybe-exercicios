const name = `Henrique Nascimento!`;
const nextYear = (callback) => console.log(`O primeiro contratato do banco Inter em 2023 é ${callback}`);
// nextYear(name);

// ------

const sum = (num1, num2) => num1 + num2;  // soma de parametros
const explain = (callback) => console.log(`A soma é igual a: ` + callback);
// explain(sum(10, 5));

// ----

const array = [1, 2, 3, 4, 5];  // multiplicação de números de um array usando reduce

const sum = array.reduce((acc, atual) => acc * atual, 1);

const show = (callback) => console.log(callback);

show(sum);