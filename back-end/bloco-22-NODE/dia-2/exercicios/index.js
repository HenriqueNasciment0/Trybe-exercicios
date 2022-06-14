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