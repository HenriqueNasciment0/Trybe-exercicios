class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        return self.loaded_memory.append(value)

    def get(self, index):
        if index == "" or not isinstance(index, int):
            return 0
        return self.loaded_memory[index]

    def clean(self):
        self.loaded_memory = []
