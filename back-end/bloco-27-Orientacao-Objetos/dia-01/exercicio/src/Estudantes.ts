class Estudantes {
    _matricula: string;
    _nome: string;
    _notaProva: number[];
    _notaTrabalho: number[];

    constructor(matricula: string, nome: string, notaProva: number[], notaTrabalho: number[]) {
        this._matricula = matricula;
        this._nome = nome;
        this._notaProva = notaProva;
        this._notaTrabalho = notaTrabalho;
    }

    somaNotas(notaProva: number[], notaTrabalho: number[]) {
        const prova = notaProva.reduce((cur, acc) => cur + acc, 0);
        const trabalho = notaTrabalho.reduce((cur, acc) => cur + acc, 0);

        return { somaNotasProvas: prova, SomaNotasTrabalhos: trabalho };
    }

    mediaNotas(notaProva: number[], notaTrabalho: number[]) {
        const prova = notaProva.reduce((cur, acc) => cur + acc, 0);
        const trabalho = notaTrabalho.reduce((cur, acc) => cur + acc, 0);

        const mediaProva = prova / notaProva.length;
        const mediaTrabalho = trabalho / notaTrabalho.length;

        return { mediaNotasProvas: mediaProva, mediaNotasTrabalhos: mediaTrabalho};
    }
}
