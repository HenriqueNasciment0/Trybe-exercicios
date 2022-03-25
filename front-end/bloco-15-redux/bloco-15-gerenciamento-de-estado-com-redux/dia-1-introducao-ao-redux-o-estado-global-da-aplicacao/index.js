import { createStore } from 'redux';

const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
    
  };

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const NEXT_COLOR = "NEXT_COLOR";
const PREVIOUS_COLOR = "PREVIOUS_COLOR";

const actionNextColor = () => {
    store.dispatch({ type: NEXT_COLOR })
}

const actionPreviousColor = () => {
    store.dispatch({ type: PREVIOUS_COLOR })
}

const reducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type) {

        case NEXT_COLOR:
            return {
                index: state.index === state.colors.length - 1 ? 0 : state.index + 1
            }

        case PREVIOUS_COLOR:
            return {
                index: state.index === 0 ? state.colors - 1 : state.index - 1
            }
        
        default:
            return state
    }; 
}

const store = createStore(reducer);

const next = document.getElementById('next');
next.addEventListener('click', actionNextColor);

const previous = document.getElementById('previous');
previous.addEventListener('click', actionPreviousColor);

document.getElementById('random').addEventListener('click', () => {
    store.dispatch({ type: 'RANDOM_COLOR' });
  });

  store.subscrive(() => {
    const { colors, index } = store.getState();
    
    const valueColor = document.getElementById('value');
    valueColor.innerHTML = colors[index];

    const container = document.getElementById('container');
    container.style.backgroundColor = colors[index];

})