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

        return

    def difference(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.list[index] and not conjuntoB.list[index]:
                return new_conjunto.add(index)

    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.list[index] and not conjuntoB.list[index]:
                return False

        return True

    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.list[index] and not self.list[index]:
                return False

        return True


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

    conj3 = Conjunto()
    conj4 = conj1.union(conj2)

    print(conj1.issubset(conj4))
    print(conj4.issuperset(conj1))
    print(conj4.issubset(conj3))


