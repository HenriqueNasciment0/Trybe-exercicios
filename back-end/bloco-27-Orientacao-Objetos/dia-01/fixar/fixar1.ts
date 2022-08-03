class Tv {
    brand: string;
    size: number;
    resolution: string;
    connetions: string;
    connectedTo?: string;

    constructor(brand: string, size: number, resolution: string, connetions: string) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connetions = connetions;
    }

    turnOn(): void {
        console.log(`Minha Tv nova é da ${this.brand}, tem ${this.size},
         tem resolução ${this.resolution} e conexões ${this.connetions}`)
    }
}

const obj1 = new Tv('Panasonic', 60, '4k', 'USB, HDMI e Bluethoth');

obj1.turnOn();
