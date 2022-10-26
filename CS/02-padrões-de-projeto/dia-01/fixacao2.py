class Eletrodomesticos:
    def __init__(self, cor, potencia, preco):
        self.cor = cor
        self.potencia = potencia
        self.preco = preco


class Microondas(Eletrodomesticos):
    def __init__(self, cor, potencia, preco, litros):
        super().__init__(cor, potencia, preco)
        self.litros = litros


class Batedeira(Eletrodomesticos):
    def __init__(self, cor, potencia, preco):
        super().__init__(cor, potencia, preco)


class Fogao(Eletrodomesticos):
    def __init__(self, cor, potencia, preco):
        super().__init__(cor, potencia, preco)


microondas_eletrolux = Microondas("inox", "220v", "R$ 690,00", "20 litros")
batedeira_eletrolux = Batedeira("branca", "220v", "R$ 290,00")
fogao_eletrolux = Fogao("preto", "110v/220v", "R$ 990,00")

print(f"O microndas Eletrolux está disponível com voltagem de {microondas_eletrolux.potencia}.")
print(f"A batedeira Eletrolux está disponível na cor {batedeira_eletrolux.cor}.")
print(f"O fogão Eletrolux está disponível a partir de {fogao_eletrolux.preco}.")
