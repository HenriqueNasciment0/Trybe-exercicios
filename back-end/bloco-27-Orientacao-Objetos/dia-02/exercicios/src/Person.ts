class Person {
    _name: string;
    _birthDate: Date;

    constructor(_name: string, _birthDate: Date) {
        this._name = _name;
        this._birthDate = _birthDate;
    }

    set name (value: string) {
        this.validationName(value);
        this._name = value;
    };

    get name (): string {
        return this.name;
    };

    set birthDate (value: Date) {
        this.validationBirthDate(value);
        this._birthDate = value;
    }

    get birthDate (): Date {
        return this._birthDate;
    }

    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
      }

    private validationName (value: string) {
        if(value.length < 3) throw new Error ('O nome deve ter mais de 3 caracteres');
    };

    private validationBirthDate (value: Date) {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
}
