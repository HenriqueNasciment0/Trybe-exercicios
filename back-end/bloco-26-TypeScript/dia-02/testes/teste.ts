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

type materia = 'solido' | 'liquido' | 'gasoso';

type cpf = number | string;

type os = 'linux' | 'macOs' | 'windows';

type vogais = 'a' | 'e' | 'i' | 'o' | 'u';


interface Cachorro {
    raça: string;
    porte: string;
    idade: number;
    apresentaDog();
}

class Cachorro {

    constructor(raça: string, porte: string, idade: number) {
        this.raça = raça;
        this.porte = porte;
        this.idade = idade;
    }

    apresentaDog() {
        return `Meu cachorro é da raça ${this.raça}, tem porte ${this.porte} e tem ${this.idade} anos.`
    }

}

const dog1 = new Cachorro('hotweiller', 'médio', 8);

console.log(dog1.apresentaDog());

// ------------------------------------------------
interface Casa {
    tipo: string;
    estado: string;
    idade: number;
    apresentaCasa(frase: string): string;
}

class Casa {

    constructor(tipo: string, estado: string, idade: number) {
        this.tipo = tipo;
        this.estado = estado;
        this.idade = idade;
    }

    apresentaCasa(frase: string) {
        return `tipo ${this.tipo}, tem estado de ${this.estado} e tem ${this.idade} anos.`
    }

}

const casa1 = new Casa('plana', 'seminova', 7);

console.log(casa1.apresentaCasa('Minha casa tem a seguinte configuração:'));


// -----------------------------------

interface Automovel {
    modelo: string;
    montadora: string;
    ano: number;
}

interface Felino {
    especie: string;
    idade: number;
    habitat: string;
    alimentação: () => void;
    sono: () => void;
}

interface Aeronave {
    modelo: string;
    marca: string;
    ano: number;
    ligarMotor: () => void;
}
