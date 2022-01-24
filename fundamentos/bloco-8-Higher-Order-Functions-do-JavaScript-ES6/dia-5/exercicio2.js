const aleatorios = [1, 2, 3, 4, 5, 6, 7];

const sum = (array) => array.reduce((acc, atual) => acc + atual);

console.log(sum(aleatorios));

/* -------------------------- */

const soma = (...numbers) => numbers.reduce((acc, atual) => acc + atual);

console.log(soma(1, 2, 3, 4));