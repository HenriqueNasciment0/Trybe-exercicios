//// PARTE 1 - OBJETOS E FOR/IN /////

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   let information = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics 178',
//     nota: 'O último MacPatinhas',
//   };

//   for (let index in info.personagem) {
//       console.log('Bem vinda', info.personagem);
//   };

  // info.recorrente = 'Sim';
  // console.log(info);

  // information.recorrente = 'Sim'

// for (let index in info) {
//     console.log(index);
// }

// for (let index in info){
//     console.log(info[index]);
// }

// for (let index in info, information) {
//     console.log(info[index], information[index]);
// }

//////////////

 /* let leitor = {
   nome: 'Julia',
   sobrenome: 'Pessoa',
   idade: 21,
   livrosFavoritos: [
     {
       titulo: 'O Pior Dia de Todos',
       autor: 'Daniela Kopsch',
       editora: 'Tordesilhas',
     },
   ],
 };

let tituloLivro = leitor.livrosFavoritos[0];

 for (let index in leitor) {
   console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', tituloLivro.titulo);
 }

 leitor.livrosFavoritos[1] = {
   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
   autor: 'JK Rowling',
   editor: 'Rocco',
 }

console.log(leitor.livrosFavoritos);

 console.log('Julia tem', leitor.livrosFavoritos.length, 'livros favoritos.') */

/// PARTE 2 - FUNÇÕES ///



/* function verificaPalindrome (palindrome) {
  if (palindrome === 'arara') {
    return true;
  } else {
    return false;
  }
}


verificaPalindrome('bode') */

////////////

let numbers = [2, 3, 4, 7, 12, 20, 23];
let maior = 0;

function maiorNumero () {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  return maior;
}

console.log(maiorNumero());







