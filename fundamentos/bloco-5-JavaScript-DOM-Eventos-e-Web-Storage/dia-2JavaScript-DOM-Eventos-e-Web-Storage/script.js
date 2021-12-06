let irmao = document.querySelector('#elementoOndeVoceEsta');
let irmaos = document.createElement('h2');
let conteudo = 'Irmãos gêmeos são esses aqui';
irmaos.innerText = conteudo;
irmao.appendChild(irmaos);

let pais = document.querySelector('#primeiroFilhoDoFilho');
let paiss = document.createElement('p');
pais.innerText = "De pai pra filho";
pais.appendChild(paiss);
console.log(document.getElementsByTagName('p');