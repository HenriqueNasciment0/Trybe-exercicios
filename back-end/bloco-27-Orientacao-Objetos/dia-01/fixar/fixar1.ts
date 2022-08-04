class Tv {
    private brand: string;
    private size: number;
    private resolution: string;
    private connetions: string[];
    private connectedTo?: string;

    constructor(brand: string, size: number, resolution: string, connetions: string[]) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connetions = connetions;
        console.log(this)
    }

    turnOn(): void {
        console.log(`Minha Tv nova é da ${this.brand}, tem ${this.size},
         tem resolução ${this.resolution} e conexões ${this.connetions}`)
    }

    get connectedTO(): string | undefined {
        return this.connectedTo;
    }

    set connectedTO(data: string | undefined) {
        if (!data || this.connetions.includes(data)) {
            this.connectedTo = data;
            console.log(this.connectedTo);
        } else {
            console.log('Sorry, connection unavailable!')
        }
    }
}

const obj1 = new Tv('Panasonic', 60, '4k', ['USB', 'HDMI', 'Bluethoth']);

obj1.turnOn();

obj1.connectedTO = 'USB';
console.log(obj1.connectedTO);
