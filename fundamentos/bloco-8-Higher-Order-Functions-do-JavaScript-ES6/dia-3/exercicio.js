/* const books = [
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
  
  // Adicione o código do exercício aqui:

/* 'EXERCICIO 1'

const formatedBookNames = books.map((e) => `${e.name} - ${e.genre} - ${e.author.name}`);
console.log(formatedBookNames); */

/* ------------ */

  /* 'EXERCICIO 2' 
const nameAndAge = books.map((e) => (
  {
    author: e.author.name,
    age: e.releaseYear - e.author.birthYear,
  }
))
.sort((item1, item2) => item1.age - item2.age);

console.log(nameAndAge); */


 /* ' EXERCICIO 3'

   const fantasyOrScienceFiction = books.filter((e) => (e.genre === 'Ficção Científica') || e.genre === 'Fantasia'); 
   
console.log(fantasyOrScienceFiction); */

/* 'EXERCICIO 4'

const oldBooksOrdered = books.filter((e) => e.releaseYear)
.sort((item1, item2) => item1.releaseYear - item2.releaseYear);
console.log(oldBooksOrdered); */

/* 'EXERCICIO 5' */




/* const numbers = [32, 15, 3, 2, -5, 56, 10];
const acumulando = ((acc, num) => {
  return acc + num;
})
const reducE = numbers.reduce(acumulando)
console.log(reducE); // 113 */

/* -------------------- */

/* const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85 */

/* ------------------ */

/* const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somePares = (acc, num) => ((num % 2 === 0) ? acc + num : acc);
const agrupe = numbers.reduce(somePares);
console.log(agrupe); */

/* --------------------- */


const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

/* const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
}; */

const bigScore = (acc, score) => ((acc.nota > score.nota) ? acc : score)

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(bigScore).name}));

console.log(reportBetter(estudantes));