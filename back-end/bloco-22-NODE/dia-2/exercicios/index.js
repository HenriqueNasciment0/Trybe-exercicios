// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome.
// Por exemplo: 1 - Homer Simpson.


const fs = require('fs').promises;

const findSimpson = async () => {
    const file = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(file);
    const print = simpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
    return print;
}

findSimpson();

//Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com 
//os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado,
//rejeite a Promise com o motivo "id não encontrado".

const findSimpsonById = async (id) => {
    const file = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(file);
    const print = simpsons.find((e) => Number(e.id) === id);
    if(!print) {
        throw new Error('id não encontrado');
    }
    return print;
}

const main = async () => {
    const simpsons = await findSimpsonById(2);
    console.log("ex. 2: ", simpsons);
}
main();