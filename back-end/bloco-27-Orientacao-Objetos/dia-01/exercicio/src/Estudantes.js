var Estudantes = /** @class */ (function () {
    function Estudantes(matricula, nome, notaProva, notaTrabalho) {
        this._matricula = matricula;
        this._nome = nome;
        this._notaProva = notaProva;
        this._notaTrabalho = notaTrabalho;
    }
    Estudantes.prototype.somaNotas = function (notaProva, notaTrabalho) {
        var prova = notaProva.reduce(function (cur, acc) { return cur + acc; }, 0);
        var trabalho = notaTrabalho.reduce(function (cur, acc) { return cur + acc; }, 0);
        return { somaNotasProvas: prova, SomaNotasTrabalhos: trabalho };
    };
    Estudantes.prototype.mediaNotas = function (notaProva, notaTrabalho) {
        var prova = notaProva.reduce(function (cur, acc) { return cur + acc; }, 0);
        var trabalho = notaTrabalho.reduce(function (cur, acc) { return cur + acc; }, 0);
        var mediaProva = prova / notaProva.length;
        var mediaTrabalho = trabalho / notaTrabalho.length;
        return { mediaNotasProvas: mediaProva, mediaNotasTrabalhos: mediaTrabalho };
    };
    return Estudantes;
}());
