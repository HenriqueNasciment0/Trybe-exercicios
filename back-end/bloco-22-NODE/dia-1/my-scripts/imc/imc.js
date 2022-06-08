const imc = (peso, altura) => (peso / (altura ^ 2)).toFixed(1);
const { questionFloat } = require('readline-sync');

const peso = questionFloat("Qual seu peso bb? ");
const altura = questionFloat("Qual sua altura bb? ");
const resultado = Number(imc(peso, altura));

if (resultado < 18.5) {
   console.log(`O seu IMC é: ${resultado}. Magreza`)
}

if (resultado >= 18.5 && resultado <= 24.9) {
    console.log(`O seu IMC é: ${resultado}. Peso normal`)
}

if (resultado >= 25.0 && resultado <= 29.9) {
    console.log(`O seu IMC é: ${resultado}. Sobre peso`)
}

if (resultado >= 30.0 && resultado <= 34.9) {
    console.log(`O seu IMC é: ${resultado}. Obesidade I`)
}

if (resultado >= 35.0 && resultado <= 39.9) {
    console.log(`O seu IMC é: ${resultado}. Obesidade II`)
}

if (resultado >= 40) {
    console.log(`O seu IMC é: ${resultado}. Obesidade III ou Obesidade`)
}

module.exports = {
    imc
};