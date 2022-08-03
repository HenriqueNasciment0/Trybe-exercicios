var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connetions) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connetions = connetions;
        console.log(this);
    }
    Tv.prototype.turnOn = function () {
        console.log("Minha Tv nova \u00E9 da ".concat(this.brand, ", tem ").concat(this.size, ",\n         tem resolu\u00E7\u00E3o ").concat(this.resolution, " e conex\u00F5es ").concat(this.connetions));
    };
    Object.defineProperty(Tv.prototype, "connectedTO", {
        get: function () {
            return this.connectedTo;
        },
        set: function (data) {
            if (!data || this.connetions.includes(data)) {
                this.connectedTo = data;
                console.log(this.connectedTo);
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
var obj1 = new Tv('Panasonic', 60, '4k', ['USB', 'HDMI', 'Bluethoth']);
obj1.turnOn();
obj1.connectedTO = 'USB';
console.log(obj1.connectedTO);
