class Conjunto:
    def __init__(self):
        self.list = [False] * 1001
        self.last_item = 0

    def add(self, item):
        if item not in self.list:
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


if __name__ == "__main__":
    conj = Conjunto()
    for item in [0, 10, 100, 1000]:
        conj.add(item)

    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)

    print(conj2)

    print(conj.__contains__(10))


