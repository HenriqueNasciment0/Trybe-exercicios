var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connetions) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connetions = connetions;
    }
    Tv.prototype.turnOn = function () {
        console.log("Minha Tv nova \u00E9 da ".concat(this.brand, ", tem ").concat(this.size, ",\n         tem resolu\u00E7\u00E3o ").concat(this.resolution, " e conex\u00F5es ").concat(this.connetions));
    };
    return Tv;
}());
var obj1 = new Tv('Panasonic', 60, '4k', 'USB, HDMI e Bluethoth');
obj1.turnOn();
