type passaro = {
    maisDeUmAno: true;
    filhotes: 3;
    femea: false;
}

type sumTwo = {
    num1: number;
    num2: number;
}

function sum(soma: sumTwo) {
    return soma.num1 + soma.num2;
}


type address = {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
}
