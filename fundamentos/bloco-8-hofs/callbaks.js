const name = `Henrique Nascimento!`;
const nextYear = (callback) => console.log(`O primeiro contratato do banco Inter em 2023 é ${callback}`);
// nextYear(name);

// ------

const sum = (num1, num2) => num1 + num2;  // soma de parametros
const explain = (callback) => console.log(`A soma é igual a: ` + callback);
// explain(sum(10, 5));

// ----

const array = [1, 2, 3, 4, 5];  // multiplicação de números de um array usando reduce"

// const sum = array.reduce((acc, atual) => acc * atual, 1);

const show = (callback) => console.log(callback);

// show(sum);

// -------

const arrayMulti = array.map((num) => num * 2);  // usando HOF map para apresentar os valores do array, vezes 2

console.log(arrayMulti);

// --------

const products = [  // usando map, apresenta somente os chaves name dos objetos no array.
    { name: "Desinfetante Veja", price: 9.99, barCode: 98293489238, quantity: 1},
    { name: "Ketchup Hellmann's", price: 7.99, barCode: 585122289238, quantity: 4},
    { name: "Milho Enlatado Zero-Six", price: 6.60, barCode: 56862359487, quantity: 6},
    { name: "Cereal Nescal Ball", price: 19.99, barCode: 19732584692, quantity: 2},
    { name: "Biscoito Trakinas", price: 4.99, barCode: 16749583215, quantity: 1},
    ];

const justName = products.map((keys) => keys.name);
console.log(justName);