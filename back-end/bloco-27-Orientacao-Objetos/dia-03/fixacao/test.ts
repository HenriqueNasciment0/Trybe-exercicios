// abstract class Character {
//     abstract talk(): void;
//     abstract specialMove(): void;
// }

// class MeleeCharacter extends Character {

//     constructor(private _name: string, private _specialMove: string) {
//         super();
//     }

//     talk(): void {
//         console.log(`Sou ${this._name}, ataco de perto!`)
//     }

//     specialMove(): void {
//         console.log(`Tenho o poder de ${this._specialMove}`)
//     }
// }

// class LongRangeCharacter extends Character {

//     constructor(private _name: string, private _specialMove: string) {
//         super();
//     }

//     talk(): void {
//         console.log(`Sou ${this._name}, ataco de longe!`)
//     }

//     specialMove(): void {
//         console.log(`Tenho o poder de ${this._specialMove}`)
//     }
// }

// function showCharacter(character: Character) {
//     character.talk();
//     character.specialMove();
// };

// const personagem1 = new MeleeCharacter('Cobra', 'meter o dente envenenado!');
// const personagem2 = new LongRangeCharacter('Baleia', 'criar ondas afogadoras!')

// showCharacter(personagem1);
// showCharacter(personagem2);

