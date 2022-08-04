"use strict";
class Character {
}
class MeleeCharacter extends Character {
    constructor(_name, _specialMove) {
        super();
        this._name = _name;
        this._specialMove = _specialMove;
    }
    talk() {
        console.log(`Sou ${this._name}, ataco de perto!`);
    }
    specialMove() {
        console.log(`Tenho o poder de ${this._specialMove}`);
    }
}
class LongRangeCharacter extends Character {
    constructor(_name, _specialMove) {
        super();
        this._name = _name;
        this._specialMove = _specialMove;
    }
    talk() {
        console.log(`Sou ${this._name}, ataco de longe!`);
    }
    specialMove() {
        console.log(`Tenho o poder de ${this._specialMove}`);
    }
}
function showCharacter(character) {
    character.talk();
    character.specialMove();
}
;
const personagem1 = new MeleeCharacter('Cobra', 'meter o dente envenenado!');
const personagem2 = new LongRangeCharacter('Baleia', 'criar ondas afogadoras!');
showCharacter(personagem1);
showCharacter(personagem2);
