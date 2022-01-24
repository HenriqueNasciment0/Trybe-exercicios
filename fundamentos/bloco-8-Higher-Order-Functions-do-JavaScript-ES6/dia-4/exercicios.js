/* 'EXERCICIO 1'

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const juntar = arrays.reduce((acc, matrix) => acc + matrix);
  console.log([juntar]); */

  /* ------------------------- */

 /*  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ]; */
  
 /*  'EXERCICIO 2'

  const stringAutores = books.reduce((acc, autor, index, array) => {
    if (index === array.length -1) return `${acc} ${autor.author.name}.`;
    return `${acc} ${autor.author.name},`
}, '');

console.log(stringAutores.trim()); */


/* 'EXERCICIO 3'

const totalDeAutores = books.length;
const averageAge = books.reduce((acc, element) =>
  acc +(element.releaseYear - element.author.birthYear), 0
);

console.log(averageAge / totalDeAutores); */

/* 'EXERCICIO 4'

const longestNamedBook = books.reduce((acc, livro) => acc.name.length > livro.name.length ? acc : livro);
console.log(longestNamedBook); */

/* --------------------- */

/* 'EXERCICIO 5'

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((acc, letra) => acc + letra.split('').reduce((acumulador, letras) => letras === 'A' || letras === 'a' ? acumulador += 1 : acumulador, 0), 0);

console.log(containsA); */


'EXERCICIO ACADEMIA DE LOGICA'

/* Dado um arquivo com dados de regiões, estados e cidades, crie uma função (mapCities) que retorna um objeto no qual as chaves são as siglas das regiões (N, NE, CW, SE e S) e os valores são arrays compostos por objetos com o nome da cidade e o nome do estado. */

/* {
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ],
}

const mapCities = () =>  */


/* ---------------------- */

/* // Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'banana', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite', 'bananada', 'chile'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

'ou'

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'banana', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['vitamina', 'com leite', 'chile'];

const fruitSalad = () => {
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad()); */



const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const frase = ({ name, age, nationality}, {profession, squad, squadInitials }) => {
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
}
frase(user, jobInfos);



