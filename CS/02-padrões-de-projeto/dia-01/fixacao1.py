class Geladeira:
    def __init__(self, cor, portas, litros, preco):
        self.preco = preco
        self.__cor = cor
        self.__portas = portas
        self.__litros = litros
        self._Pessoa__cor = cor # busca o nome da cor

    def cor(self):
        return self.__cor

    def __str__(self):
        return f"{self.__cor}"


class Pessoa:
    def __init__(self, nome, carteira):
        self.nome = nome
        self.carteira = carteira
        self.geladeira = None

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.carteira:
            self.carteira -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        if (self.geladeira):
            return f"{self.nome} - tem uma geladeira da cor {self.geladeira.__cor}" # busca o nome da cor
        return f"{self.nome} - não tem geladeira"


geladeira_inox = Geladeira("inox", 2, 450, 2500)
comprador_henrique = Pessoa("Henrique", 3000)
comprador_henrique.comprar_geladeira(geladeira_inox)

print(comprador_henrique)
