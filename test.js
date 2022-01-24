const lista = document.querySelector('#listaTotal');
const lis = document.getElementsByTagName('li');
const titulo = document.getElementById('titulo');
const body = document.getElementById('corpo');
const item = Array.from(lista.children);
const paiLista = lista.parentElement;



corDaLista(body);
function corDaLista(e) {
    e.style.backgroundColor = 'black';
}
corItens();
function corItens() {
   for (let i = 0; i < lis.length; i += 1) {
       lis[i].className = 'lis';
       lis[i].style.color = 'white';
   }
   titulo.style.color = 'white';
}

function mudarPVermelho(e) {
    e.target.classList.toggle('marcado');
    const marcou = document.querySelector('.marcado');
    marcou.style.backgroundColor = 'red';
}
lista.addEventListener('click', mudarPVermelho);