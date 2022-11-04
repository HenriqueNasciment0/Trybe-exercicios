numeros = input("Digite números separados por espaço: ")

lista_numeros = numeros.split()

soma = 0

for num in lista_numeros:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} é um valor inválido")
    else:
         soma += int(num)

print(f"A soma dos numeros fornecidos é: {soma}")

