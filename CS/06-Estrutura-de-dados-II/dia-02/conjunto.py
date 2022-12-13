class Conjunto:
    def __init__(self):
        self.list = [False] * 1001
        self.last_item = 0

    def add(self, item):
        if not self.list[item]:
            self.list[item] = True
        if item > self.last_item:
            self.last_item = item

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.list):
            if is_in_set:
                string += str(index)
                if index < self.last_item:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.list[item]

    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.list[index] or conjuntoB.list[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.list[index] and conjuntoB.list[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    # conj = Conjunto()
    # for item in [0, 10, 100, 1000]:
    #     conj.add(item)

    # print(conj)

    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = conj1.intersection(conj2)
    print(conj3)


