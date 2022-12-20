"""
EXERCÍCIO 1
Você receberá uma lista de palavras e uma string.
Escreva uma função que decida quais palavras podem ser formadas com
os caracteres da string (cada caractere só pode ser utilizado uma vez).
Retorne a soma do comprimento das palavras escolhidas.
"""

words = ["cat", "bt", "hat", "tree"]
chars = "atach"

def word_in_word(words, chars):
    chars_verify = {}
    result = 0
    for char in chars:
        if char not in chars_verify:
            chars_verify[char] = 1
        else:
            chars_verify[char] += 1

    for word in words:
        str_verify = {}
        for letter in word:
            if letter not in chars_verify:
                print(f"A letra -{letter}- não faz parte dos caracteres padrão.")
                break

            if letter not in str_verify:
                str_verify[letter] = 1
            else:
                str_verify[letter] += 1

                if str_verify[letter] > chars_verify[letter]:
                    print(f"A letra -{letter}- aparece mais vezes do que nos caracteres padrão.")
                    break
        else:
            result += len(word)


    return result


print(f"Resposta final: {word_in_word(words, chars)}")
print()
words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(f"Resposta final: {word_in_word(words, chars)}")

